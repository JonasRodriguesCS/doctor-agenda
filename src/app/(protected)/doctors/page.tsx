import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  PageActions,
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageTitle,
} from "@/components/ui/page-conteiner";

const DoctorsPage = () => {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Médicos</PageTitle>
          <PageDescription>Gerencie os médicos da sua clínica</PageDescription>
        </PageHeaderContent>
        <PageActions>
          <Button>
            <Plus />
            Adicionar médico
          </Button>
        </PageActions>
      </PageHeader>
      <PageContainer>
        <h1>Médicos</h1>
      </PageContainer>
    </PageContainer>
  );
};

export default DoctorsPage;
