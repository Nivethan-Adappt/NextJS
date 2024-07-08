/*
  Warnings:

  - You are about to drop the `EmployeeListTable` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "EmployeeListTable";

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "pointSystem" TEXT NOT NULL,
    "remarks" TEXT NOT NULL,
    "addedby" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
