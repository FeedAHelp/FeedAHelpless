/*
  Warnings:

  - The primary key for the `EmailVerify` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `LoginHistory` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropIndex
DROP INDEX "LoginHistory_userId_idx";

-- DropIndex
DROP INDEX "User_registerId_idx";

-- AlterTable
ALTER TABLE "EmailVerify" DROP CONSTRAINT "EmailVerify_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "EmailVerify_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "EmailVerify_id_seq";

-- AlterTable
ALTER TABLE "LoginHistory" DROP CONSTRAINT "LoginHistory_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "LoginHistory_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "LoginHistory_id_seq";
