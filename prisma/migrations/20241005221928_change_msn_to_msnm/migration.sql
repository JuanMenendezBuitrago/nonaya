/*
  Warnings:

  - You are about to drop the column `profile` on the `coffees` table. All the data in the column will be lost.
  - You are about to drop the column `msn` on the `origins` table. All the data in the column will be lost.
  - Added the required column `msnm` to the `origins` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `coffees` DROP COLUMN `profile`;

-- AlterTable
ALTER TABLE `origins` DROP COLUMN `msn`,
    ADD COLUMN `msnm` INTEGER NOT NULL;
