# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

## Artifacts

### Hero Section (`artifacts/hero-section`)
A full Lazada-clone e-commerce web app built with React + Vite + Tailwind CSS + Wouter routing.

**Pages:**
- `/` — Home page with hero banner, flash sale, LazMall, categories, just for you
- `/shop` — Product listing with category sidebar filters, price range, rating filter, sort
- `/product/:id` — Product detail with image gallery, quantity, add to cart, reviews, related products
- `/cart` — Shopping cart with quantity controls, order summary, free shipping threshold
- `/checkout` — 3-step checkout (Address → Payment → Review) with order confirmation
- `/account` — My Account dashboard (orders, wishlist, addresses, settings)

**Key files:**
- `src/context/CartContext.tsx` — Global cart state via React Context + useReducer
- `src/data/products.ts` — 24 product catalog shared across all pages
- `src/App.tsx` — Router + CartProvider + toast notification
- `src/components/Header.tsx` — Sticky header with cart badge + nav links

**Colors:** Primary orange `#f57224`, Teal accent `#3dbdb7`, Background `#f5f5f5`
