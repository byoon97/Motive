/*
  Warnings:

  - You are about to drop the column `description` on the `Car` table. All the data in the column will be lost.
  - You are about to drop the column `fullName` on the `Car` table. All the data in the column will be lost.
  - Added the required column `model` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rating` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `Image` on the `Car` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `carId` to the `Trip` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Car" DROP COLUMN "description",
DROP COLUMN "fullName",
ADD COLUMN     "model" TEXT NOT NULL,
ADD COLUMN     "rating" INTEGER NOT NULL,
DROP COLUMN "Image",
ADD COLUMN     "Image" JSONB NOT NULL;

-- AlterTable
ALTER TABLE "Trip" ADD COLUMN     "carId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Trip" ADD CONSTRAINT "Trip_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
