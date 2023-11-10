/*
  Warnings:

  - Made the column `jerseyNumber` on table `Player` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Player" ALTER COLUMN "jerseyNumber" SET NOT NULL,
ALTER COLUMN "jerseyNumber" DROP DEFAULT;
