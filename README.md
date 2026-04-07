# Multi-Vendor Ecommerce Website

A modern, full-stack multi-vendor ecommerce development project. This repository contains the hero section design, an API server, and a database management system, built as a pnpm workspace monorepo.

## Project Structure

This monorepo is divided into several packages:

- **`artifacts/hero-section`**: React + Vite frontend for the ecommerce hero section.
- **`artifacts/api-server`**: Express 5 backend for the ecommerce API.
- **`lib/`**: Shared libraries and utilities.
- **`scripts/`**: Automation and toolscripts.

## Tech Stack

- **Framework**: Vite + React
- **Language**: TypeScript
- **Backend**: Express 5
- **ORM**: Drizzle ORM + PostgreSQL
- **Validation**: Zod
- **Styling**: Tailwind CSS + Shadcn UI
- **Package Manager**: pnpm

## Getting Started

1.  **Install dependencies**:
    ```bash
    pnpm install
    ```

2.  **Run Development Server**:
    - Frontend: `pnpm --filter @workspace/hero-section run dev`
    - API Server: `pnpm --filter @workspace/api-server run dev`

3.  **Build All**:
    ```bash
    pnpm run build
    ```

## Vercel Deployment

To deploy this project on Vercel:

1.  Push this repository to GitHub.
2.  Import the project into Vercel.
3.  Vercel will detect it as a monorepo. 
4.  Configure the root directory to `artifacts/hero-section` to deploy the frontend.
