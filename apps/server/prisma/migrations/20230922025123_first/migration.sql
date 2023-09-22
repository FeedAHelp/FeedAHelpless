-- CreateEnum
CREATE TYPE "ContributionTypes" AS ENUM ('financial', 'volunteer');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT,
    "registerId" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LoginHistory" (
    "id" SERIAL NOT NULL,
    "loginTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,

    CONSTRAINT "LoginHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Register" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "accessToken" TEXT NOT NULL,
    "verified" BOOLEAN NOT NULL,

    CONSTRAINT "Register_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Newsletter" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Newsletter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FahCounter" (
    "id" TEXT NOT NULL,
    "sectionName" TEXT NOT NULL,
    "sectionDescription" TEXT NOT NULL,
    "imageIconUrl" TEXT NOT NULL,
    "imageAlt" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "monthlyIncrease" TEXT NOT NULL,

    CONSTRAINT "FahCounter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ingredients" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "imageName" TEXT NOT NULL,

    CONSTRAINT "Ingredients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EmailVerify" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "code" INTEGER NOT NULL,
    "expireAt" TIMESTAMP(3) NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EmailVerify_pkey" PRIMARY KEY ("id")
);

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

-- CreateTable
CREATE TABLE "menues" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "menues_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "subMenues" (
    "id" TEXT NOT NULL,
    "menu" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "subMenues_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "subMenuIngredients" (
    "id" TEXT NOT NULL,
    "subMenu" TEXT NOT NULL,
    "ingredient" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "subMenuIngredients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "menuWishLikes" (
    "id" TEXT NOT NULL,
    "menuId" TEXT NOT NULL,
    "likes" INTEGER NOT NULL,
    "wishs" INTEGER NOT NULL,
    "shares" INTEGER NOT NULL,

    CONSTRAINT "menuWishLikes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Wishs" (
    "id" TEXT NOT NULL,
    "menuId" TEXT NOT NULL,
    "wisher" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Wishs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Likes" (
    "id" TEXT NOT NULL,
    "menuId" TEXT NOT NULL,
    "liker" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Likes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Shares" (
    "id" TEXT NOT NULL,
    "menuId" TEXT NOT NULL,
    "sharer" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Shares_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_registerId_key" ON "User"("registerId");

-- CreateIndex
CREATE UNIQUE INDEX "Register_email_key" ON "Register"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Register_phone_key" ON "Register"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "Newsletter_email_key" ON "Newsletter"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Ingredients_name_key" ON "Ingredients"("name");

-- CreateIndex
CREATE UNIQUE INDEX "menues_name_key" ON "menues"("name");

-- CreateIndex
CREATE UNIQUE INDEX "subMenues_name_key" ON "subMenues"("name");

-- CreateIndex
CREATE UNIQUE INDEX "menuWishLikes_menuId_key" ON "menuWishLikes"("menuId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_registerId_fkey" FOREIGN KEY ("registerId") REFERENCES "Register"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LoginHistory" ADD CONSTRAINT "LoginHistory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Register"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmailVerify" ADD CONSTRAINT "EmailVerify_email_fkey" FOREIGN KEY ("email") REFERENCES "Register"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contributions" ADD CONSTRAINT "contributions_contributor_fkey" FOREIGN KEY ("contributor") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subMenues" ADD CONSTRAINT "subMenues_menu_fkey" FOREIGN KEY ("menu") REFERENCES "menues"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subMenuIngredients" ADD CONSTRAINT "subMenuIngredients_subMenu_fkey" FOREIGN KEY ("subMenu") REFERENCES "subMenues"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subMenuIngredients" ADD CONSTRAINT "subMenuIngredients_ingredient_fkey" FOREIGN KEY ("ingredient") REFERENCES "Ingredients"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "menuWishLikes" ADD CONSTRAINT "menuWishLikes_menuId_fkey" FOREIGN KEY ("menuId") REFERENCES "subMenues"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Wishs" ADD CONSTRAINT "Wishs_menuId_fkey" FOREIGN KEY ("menuId") REFERENCES "menuWishLikes"("menuId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Wishs" ADD CONSTRAINT "Wishs_wisher_fkey" FOREIGN KEY ("wisher") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Likes" ADD CONSTRAINT "Likes_menuId_fkey" FOREIGN KEY ("menuId") REFERENCES "menuWishLikes"("menuId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Likes" ADD CONSTRAINT "Likes_liker_fkey" FOREIGN KEY ("liker") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shares" ADD CONSTRAINT "Shares_menuId_fkey" FOREIGN KEY ("menuId") REFERENCES "menuWishLikes"("menuId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shares" ADD CONSTRAINT "Shares_sharer_fkey" FOREIGN KEY ("sharer") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
