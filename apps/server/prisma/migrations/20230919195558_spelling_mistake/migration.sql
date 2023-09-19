/*
  Warnings:

  - Added the required column `verified` to the `Register` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "LoginHistory" DROP CONSTRAINT "LoginHistory_userId_fkey";

-- AlterTable
ALTER TABLE "Register" ADD COLUMN     "verified" BOOLEAN NOT NULL;

-- AddForeignKey
ALTER TABLE "LoginHistory" ADD CONSTRAINT "LoginHistory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Register"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
