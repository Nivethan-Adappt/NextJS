## Create a New Next.js Project

npx create-next-app my-next-app
npm run dev

## Install Prisma and PostgreSQL Client

npm install prisma @prisma/client
npm install --save-dev prisma
npm install pg

## Initialize Prisma

npx prisma init

## Migrate Your Database

npx prisma migrate dev --name init
