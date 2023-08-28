/*
  Warnings:

  - You are about to drop the column `Image` on the `Car` table. All the data in the column will be lost.
  - Added the required column `image` to the `Car` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Car" DROP COLUMN "Image",
ADD COLUMN     "image" JSONB NOT NULL;
