# Next.js Todo Application

A full-stack Todo application built with Next.js, TypeScript, Tailwind CSS, and PostgreSQL.

## Features

- **User Authentication:** Secure login with NextAuth and a credentials' provider.
- **Task Management:** Add, update (mark as complete/pending), and delete tasks.
- **Docker for Local Development:** Docker Compose configuration for both the app and database.
- **Database Integration:** PostgresSQL with Prisma ORM.
- **Language:** TypeScript
- **Styles:** Tailwind CSS
- **Optimizations:** Use of server actions, caching, and Next.js error handling.

## Prerequisites

- Node.js 22+
- Docker and Docker Compose
- Git

## Getting Started

To get started with Tasks Application, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/fr8ak2/golden-apple.git
   ```

2. Set up environment variables:
   ```bash
   cp .env.example .env

   # Prisma
   DATABASE_URL='postgresql://postgres:postgres@localhost:5432/todo_db?schema=public'

   # Postgres Database
   POSTGRES_HOSTNAME='postgres_db'
   POSTGRES_USER='postgres'
   POSTGRES_PASSWORD='postgres'
   POSTGRES_DB='todo_db'

   # Next Auth
   AUTH_URL='http://localhost:3000'
   AUTH_TRUST_HOST='http://localhost:3000'
   AUTH_SECRET='pbF6oddR541EQl0c7n6t0KkdUTl2DboBDzXXwDUsWfc='

   Secret could be generated using: https://generate-secret.vercel.app/32
   or
   npx auth secret and copy generated to .env
   ```

3. Install dependencies:
   ```bash
   cd golden-apple

   # Set
   corepack enable
   yarn set version 4.6.0

   # Install
   yarn install
   ```

4. Run prisma schema generator:
   ```bash
   yarn prisma:generate
   ```

5. Run the development server (run it, after docker-compose):
   ```bash
   yarn dev
   ```

6. Run the tests:
   ```bash
   yarn test
   ```

## :whale: Using Docker Compose

To set up PostgreSQL Docker Compose, follow these steps:

1. Ensure Docker and Docker Compose are installed on your machine.
2. Running required services with docker-compose:
   ```bash
   docker-compose up -d
   ```
3. Run database migration
   ```bash
   yarn run prisma:migrate
   ```
4. The PostgreSQL database will be available at `localhost:5432`.


