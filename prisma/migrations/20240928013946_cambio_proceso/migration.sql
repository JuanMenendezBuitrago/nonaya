/*
  Warnings:

  - You are about to alter the column `name` on the `processes` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(0))` to `VarChar(191)`.
  - Added the required column `type` to the `processes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `processes` ADD COLUMN `type` ENUM('WASHED', 'NATURAL', 'HONEY') NOT NULL,
    MODIFY `name` VARCHAR(191) NOT NULL;
