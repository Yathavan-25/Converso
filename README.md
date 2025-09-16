This is a Next.js App Router project.

## Getting Started

1) Install dependencies

```bash
npm install
```

2) Set up Clerk environment variables in a local file (do not commit):

Create `.env.local` in the project root with the following placeholders. Replace with your real keys from the Clerk Dashboard when running locally.

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=YOUR_PUBLISHABLE_KEY
CLERK_SECRET_KEY=YOUR_SECRET_KEY
```

Note: `.gitignore` already excludes `.env*`, so your real keys will not be committed.

3) Run the development server

```bash
npm run dev
```

Open http://localhost:3000 with your browser to see the result.

## Clerk Integration Summary (App Router)
- Authentication middleware is configured in `middleware.ts` using `clerkMiddleware()` from `@clerk/nextjs/server`.
- The app is wrapped with `<ClerkProvider>` in `app/layout.tsx`.
- You can sign in/up using `<SignInButton>` and `<SignUpButton>`, and manage the session with `<UserButton>`.

For the latest instructions, see: https://clerk.com/docs/quickstarts/nextjs

## Learn More
- Next.js App Router docs: https://nextjs.org/docs/app
- Clerk for Next.js: https://clerk.com/docs/quickstarts/nextjs
