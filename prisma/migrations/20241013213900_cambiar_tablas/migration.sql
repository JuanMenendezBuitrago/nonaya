/*
  Warnings:

  - You are about to drop the `Grind` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Roast` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `type` to the `coupons` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `methods` DROP FOREIGN KEY `methods_grindId_fkey`;

-- DropForeignKey
ALTER TABLE `products` DROP FOREIGN KEY `products_grindId_fkey`;

-- DropForeignKey
ALTER TABLE `products` DROP FOREIGN KEY `products_roastId_fkey`;

-- AlterTable
ALTER TABLE `coffees` ADD COLUMN `fermentationId` INTEGER NULL;

-- AlterTable
ALTER TABLE `coupons` ADD COLUMN `type` ENUM('PRODUCT', 'ORDER') NOT NULL;

-- DropTable
ALTER TABLE `Grind` RENAME `grinds`;

-- DropTable
ALTER TABLE `Roast` RENAME `roasts`;


-- CreateTable
CREATE TABLE `fermentations` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,

    UNIQUE INDEX `fermentations_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `coffees` ADD CONSTRAINT `coffees_fermentationId_fkey` FOREIGN KEY (`fermentationId`) REFERENCES `fermentations`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_grindId_fkey` FOREIGN KEY (`grindId`) REFERENCES `grinds`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_roastId_fkey` FOREIGN KEY (`roastId`) REFERENCES `roasts`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `methods` ADD CONSTRAINT `methods_grindId_fkey` FOREIGN KEY (`grindId`) REFERENCES `grinds`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
