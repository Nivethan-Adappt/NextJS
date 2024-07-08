/*
  Warnings:

  - You are about to drop the column `addedby` on the `User` table. All the data in the column will be lost.
  - Added the required column `addedBy` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "addedby",
ADD COLUMN     "addedBy" TEXT NOT NULL;
