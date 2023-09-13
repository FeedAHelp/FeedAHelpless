/*
  Warnings:

  - You are about to drop the column `createAt` on the `UserLoggedIn` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "UserLoggedIn" DROP COLUMN "createAt",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
