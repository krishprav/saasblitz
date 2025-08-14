## SaaSBlitz

AI-powered Next.js app with Clerk auth, tRPC, Prisma/Postgres, and an Inngest-powered code agent that runs in E2B sandboxes.

### Tech stack
- **Framework**: Next.js 15, React 19, Tailwind + shadcn/ui
- **Auth**: Clerk
- **API**: tRPC v11 + React Query
- **DB**: Prisma + PostgreSQL
- **Jobs/Agent**: Inngest + `@e2b/code-interpreter`

---

## Quick start

### Prerequisites
- **Node**: v18+ (recommended v20+)
- **npm**: v9+
- **PostgreSQL**: local or Docker
- Optional: **Docker** (to run Postgres quickly)

### 1) Install dependencies
```bash
npm install
```

### 2) Configure environment variables
Create `.env.local` in the project root with the following keys:
```env
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/vibe?schema=public
NEXT_PUBLIC_API_URL=http://localhost:3000

# Clerk (required)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

# OpenAI (required for the agent models)
OPENAI_API_KEY=sk-...

# E2B (required for the sandbox the agent uses)
E2B_API_KEY=...
```

Where do I get these?
- **Clerk keys**: Create a Clerk application in the Clerk dashboard and copy the publishable and secret keys.
- **OpenAI key**: From your OpenAI account settings.
- **E2B key**: Create one in the E2B dashboard. Docs: [E2B API key](https://e2b.dev/docs/api-key).

Notes
- `NEXT_PUBLIC_API_URL` should be your server URL for server-side requests. In dev use `http://localhost:3000`.
- Keep secrets out of source control. `.env.local` is git-ignored.

### 3) Start Postgres (Docker option)
```bash
docker run --name vibe-postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_USER=postgres -e POSTGRES_DB=vibe -p 5432:5432 -d postgres:16
```

### 4) Apply database migrations
```bash
npx prisma migrate deploy
```
If you’re starting fresh and prefer pushing the current schema:
```bash
npx prisma db push
```

### 5) Run the dev server
```bash
npm run dev
```
Open `http://localhost:3000`.

Sign in at `/sign-in` or `/sign-up` using your Clerk instance.

---

## How it works (very short)
- **Auth**: `@clerk/nextjs` with middleware in `src/middleware.ts` protecting non-public routes.
- **API**: tRPC router in `src/trpc/routers/_app.ts` served at `/api/trpc`.
- **DB**: Prisma client in `src/lib/db.ts` with schema in `prisma/schema.prisma`.
- **Agent**: Inngest function in `src/inngest/functions.ts` uses E2B to spin up a sandbox and OpenAI models via `@inngest/agent-kit`.

---

## Common issues
- **Environment variable not found: DATABASE_URL**
  - Ensure `.env.local` exists and the terminal was restarted, or prefix the command with `set -a; source .env.local` (bash) before running Prisma.
- **Cannot connect to Postgres**
  - Make sure Postgres is running and your `DATABASE_URL` user/password/db match your instance.
- **Clerk errors on sign-in**
  - Check `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY` are set. In dev, ensure your Clerk instance has `http://localhost:3000` allowed.
- **Agent not producing results**
  - Verify `OPENAI_API_KEY` and `E2B_API_KEY` are present and valid.

---

## Scripts
- **dev**: `npm run dev`
- **build**: `npm run build`
- **start**: `npm run start`
- **prisma generate**: `npx prisma generate`
- **migrations**: `npx prisma migrate deploy`

---

## Contributing
PRs welcome. Please keep code readable and typed; follow existing patterns in `src/modules/*` and `src/components/*`.
