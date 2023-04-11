/*
  Warnings:

  - Changed the type of `profile` on the `Adress` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Adress" DROP COLUMN "profile",
ADD COLUMN     "profile" BOOLEAN NOT NULL;
