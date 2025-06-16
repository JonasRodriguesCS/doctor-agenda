import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";
import Stripe from "stripe";

import { db } from "@/db";
import { usersTable } from "@/db/schema";

export const POST = async (request: Request) => {
  if (!process.env.STRIPE_SECRET_KEY || !process.env.STRIPE_WEBHOOK_SECRET) {
    throw new Error("Stripe secret key not found");
  }

  const signature = request.headers.get("stripe-signature");
  if (!signature) {
    throw new Error("Stripe signature not found");
  }

  const text = await request.text();
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2025-05-28.basil",
  });

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(text, signature, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (error) {
    console.error("Error verifying Stripe webhook:", error);
    return new NextResponse("Webhook signature verification failed", { status: 400 });
  }

  switch (event.type) {
    case "invoice.payment_succeeded": {
      const invoicePaymentSucceeded = event.data.object;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const subscription_details = (invoicePaymentSucceeded as any).parent
        .subscription_details;
      const customer = invoicePaymentSucceeded.customer;
      const subscription = subscription_details!.subscription;

      if (!subscription) {
        throw new Error("Subscription not found");
      }
      const userId = subscription_details.metadata.userId;
      if (!userId) {
        throw new Error("User ID not found");
      }
      await db
        .update(usersTable)
        .set({
          stripeSubscriptionId: subscription,
          stripeCustomerId: customer as string,
          plan: "essential",
        })
        .where(eq(usersTable.id, userId));
        break;
      }

    case "customer.subscription.deleted": {
      const subscription = event.data.object as Stripe.Subscription;

      const userId = subscription.metadata?.userId;

      if (!userId) {
        throw new Error("User ID not found in subscription metadata");
      }

      // Remove informações da assinatura no banco de dados
      await db
        .update(usersTable)
        .set({
          stripeSubscriptionId: null,
          stripeCustomerId: null,
          plan: null,
        })
        .where(eq(usersTable.id, userId));

      break;
    }

    default:
      console.log(`Unhandled event type: ${event.type}`);
  }

  return NextResponse.json({ received: true }, { status: 200 });
};