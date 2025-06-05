import { PageContent } from "@/components/ui/page-conteiner";
import { PageActions } from "@/components/ui/page-conteiner";
import { PageDescription } from "@/components/ui/page-conteiner";
import { PageTitle } from "@/components/ui/page-conteiner";
import { PageHeaderContent } from "@/components/ui/page-conteiner";
import { PageHeader } from "@/components/ui/page-conteiner";
import { PageContainer } from "@/components/ui/page-conteiner";

import { SubscriptionPlan } from "./_components/subscription-plan";

const SubscriptionPage = () => {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Assinatura</PageTitle>
          <PageDescription>Gerencie a sua assinatura.</PageDescription>
        </PageHeaderContent>
        <PageActions></PageActions>
      </PageHeader>
      <PageContent>
        <SubscriptionPlan className="w-[350px]" />
      </PageContent>
    </PageContainer>
  );
};

export default SubscriptionPage;
