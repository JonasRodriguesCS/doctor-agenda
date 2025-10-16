# Doutor Agenda - Sistema de Gestão Médica

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Drizzle ORM](https://img.shields.io/badge/Drizzle%20ORM-FF6B6B?style=for-the-badge&logo=drizzle&logoColor=white)](https://orm.drizzle.team/)

O Doutor Agenda é um sistema de gestão médica completo que permite o agendamento de consultas, gerenciamento de pacientes e controle de clínicas. Desenvolvido com tecnologias modernas, oferece uma experiência ágil e segura para profissionais de saúde e seus pacientes.

## 🚀 Funcionalidades Principais

- **Agendamento de Consultas**: Interface intuitiva para marcar, remarcar e cancelar consultas
- **Gestão de Pacientes**: Cadastro completo de pacientes com histórico médico
- **Multi-clínicas**: Suporte a múltiplas clínicas e profissionais
- **Autenticação Segura**: Sistema de login com múltiplos provedores
- **Dashboard Analítico**: Visualização de métricas e relatórios
- **Responsivo**: Acesso otimizado para desktop e dispositivos móveis

## 🛠️ Tecnologias Utilizadas

- **Frontend**:
  - Next.js 14 com App Router
  - TypeScript
  - React 19
  - Shadcn/ui
  - Tailwind CSS
  - TanStack Query
  - React Hook Form

- **Backend**:
  - Next.js API Routes
  - Drizzle ORM
  - PostgreSQL
  - NextAuth.js
  - Zod para validação de dados

- **Ferramentas**:
  - ESLint e Prettier para padronização de código
  - Drizzle para migrações de banco de dados
  - Day.js para manipulação de datas

## 📦 Pré-requisitos

- Node.js 18+
- PostgreSQL 14+
- pnpm (recomendado) ou npm/yarn

## 🚀 Como Executar o Projeto

1. **Clonar o repositório**
   ```bash
   git clone https://github.com/JonasRodriguesCS/doctor-agenda.git
   cd doctor-agenda
   ```

2. **Instalar dependências**
   ```bash
   pnpm install
   # ou
   npm install
   ```

3. **Configurar variáveis de ambiente**
   Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:
   ```env
   # Banco de Dados
   DATABASE_URL="postgresql://usuario:senha@localhost:5432/doutor_agenda"
   
   # Autenticação
   NEXTAUTH_SECRET="seu-segredo-seguro"
   NEXTAUTH_URL="http://localhost:3000"
   
   # Configurações do Stripe (opcional)
   STRIPE_SECRET_KEY=""
   STRIPE_WEBHOOK_SECRET=""
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=""
   ```

4. **Executar migrações do banco de dados**
   ```bash
   pnpm db:push
   ```

5. **Iniciar o servidor de desenvolvimento**
   ```bash
   pnpm dev
   ```

6. **Acessar a aplicação**
   Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 🏗️ Estrutura do Projeto

```
src/
├── actions/           # Ações do servidor
├── app/               # Rotas da aplicação
├── components/        # Componentes React
├── db/                # Configuração do banco de dados
├── hooks/             # Hooks personalizados
├── lib/               # Utilitários e configurações
├── providers/         # Providers React
└── styles/            # Estilos globais
```

## 🔒 Variáveis de Ambiente

| Variável                     | Obrigatório | Descrição                                      |
|------------------------------|-------------|------------------------------------------------|
| `DATABASE_URL`              | Sim         | URL de conexão com o PostgreSQL               |
| `NEXTAUTH_SECRET`           | Sim         | Segredo para criptografia de sessão           |
| `NEXTAUTH_URL`              | Sim         | URL base da aplicação                         |
| `STRIPE_SECRET_KEY`         | Não         | Chave secreta da API do Stripe                |
| `STRIPE_WEBHOOK_SECRET`     | Não         | Segredo para webhooks do Stripe               |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Não | Chave pública do Stripe (frontend)     |

## 🤝 Contribuição

Contribuições são sempre bem-vindas! Siga estes passos:

1. Faça um Fork do projeto
2. Crie uma Branch para sua Feature (`git checkout -b feature/AmazingFeature`)
3. Adicione suas mudanças (`git add .`)
4. Comite suas mudanças (`git commit -m 'Add some AmazingFeature'`)
5. Faça o Push da Branch (`git push origin feature/AmazingFeature`)
6. Abra um Pull Request

## 📞 Suporte

Para suporte, envie um e-mail para suporte@doutoragenda.com.br ou abra uma issue no repositório.

## 📊 Status do Projeto

🚧 Em desenvolvimento ativo

---

