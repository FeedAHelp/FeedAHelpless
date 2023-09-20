/*
  Warnings:

  - You are about to drop the column `createAt` on the `FeedahelpNewsletter` table. All the data in the column will be lost.
  - You are about to drop the `contributionId` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "ContributionTypes" AS ENUM ('financial', 'volunteer');

-- AlterTable
ALTER TABLE "FeedahelpNewsletter" DROP COLUMN "createAt",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- DropTable
DROP TABLE "contributionId";

-- DropEnum
DROP TYPE "ContributionType";

-- CreateTable
CREATE TABLE "contributions" (
    "id" TEXT NOT NULL,
    "contributor" TEXT NOT NULL,
    "type" "ContributionTypes" NOT NULL,
    "dateTime" TIMESTAMP(3) NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "contributions_pkey" PRIMARY KEY ("id")
);
