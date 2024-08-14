/*
  Warnings:

  - You are about to drop the `Newsletter` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "Payment" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Register" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- DropTable
DROP TABLE "Newsletter";

-- CreateIndex
CREATE INDEX "EmailVerify_email_idx" ON "EmailVerify"("email");

-- CreateIndex
CREATE INDEX "Likes_menuId_idx" ON "Likes"("menuId");

-- CreateIndex
CREATE INDEX "Likes_liker_idx" ON "Likes"("liker");

-- CreateIndex
CREATE INDEX "LoginHistory_userId_idx" ON "LoginHistory"("userId");

-- CreateIndex
CREATE INDEX "Shares_menuId_idx" ON "Shares"("menuId");

-- CreateIndex
CREATE INDEX "Shares_sharer_idx" ON "Shares"("sharer");

-- CreateIndex
CREATE INDEX "User_registerId_idx" ON "User"("registerId");

-- CreateIndex
CREATE INDEX "Wishs_menuId_idx" ON "Wishs"("menuId");

-- CreateIndex
CREATE INDEX "Wishs_wisher_idx" ON "Wishs"("wisher");

-- CreateIndex
CREATE INDEX "contributions_contributor_idx" ON "contributions"("contributor");

-- CreateIndex
CREATE INDEX "menuWishLikes_menuId_idx" ON "menuWishLikes"("menuId");

-- CreateIndex
CREATE INDEX "subMenuIngredients_subMenu_idx" ON "subMenuIngredients"("subMenu");

-- CreateIndex
CREATE INDEX "subMenuIngredients_ingredient_idx" ON "subMenuIngredients"("ingredient");

-- CreateIndex
CREATE INDEX "subMenues_menu_idx" ON "subMenues"("menu");
