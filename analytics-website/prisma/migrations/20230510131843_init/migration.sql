/*
  Warnings:

  - A unique constraint covering the columns `[key]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "User_key_key" ON "User"("key");
