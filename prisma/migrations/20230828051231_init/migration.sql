/*
  Warnings:

  - You are about to drop the column `Rating` on the `Review` table. All the data in the column will be lost.
  - Added the required column `rating` to the `Review` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Review" DROP COLUMN "Rating",
ADD COLUMN     "rating" INTEGER NOT NULL;
