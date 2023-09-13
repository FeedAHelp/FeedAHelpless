-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT,
    "registerId" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserLoggedIn" (
    "id" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,

    CONSTRAINT "UserLoggedIn_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Register" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "accessToken" TEXT NOT NULL,

    CONSTRAINT "Register_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FeedahelpNewsletter" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "email" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FeedahelpNewsletter_pkey" PRIMARY KEY ("id")
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

-- CreateIndex
CREATE UNIQUE INDEX "User_registerId_key" ON "User"("registerId");

-- CreateIndex
CREATE UNIQUE INDEX "Register_email_key" ON "Register"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Register_phone_key" ON "Register"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "FeedahelpNewsletter_email_key" ON "FeedahelpNewsletter"("email");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_registerId_fkey" FOREIGN KEY ("registerId") REFERENCES "Register"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserLoggedIn" ADD CONSTRAINT "UserLoggedIn_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
