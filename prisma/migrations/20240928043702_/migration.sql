/*
  Warnings:

  - You are about to drop the column `grind` on the `methods` table. All the data in the column will be lost.
  - You are about to drop the column `class` on the `mimes` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `processes` table. All the data in the column will be lost.
  - You are about to drop the column `grind` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `roast` on the `products` table. All the data in the column will be lost.
  - You are about to alter the column `name` on the `roles` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(0))` to `VarChar(191)`.

*/
-- DropForeignKey
ALTER TABLE `coffees` DROP FOREIGN KEY `coffees_originId_fkey`;

-- DropForeignKey
ALTER TABLE `coffees` DROP FOREIGN KEY `coffees_processId_fkey`;

-- DropForeignKey
ALTER TABLE `coffees` DROP FOREIGN KEY `coffees_varietyId_fkey`;

-- AlterTable
ALTER TABLE `coffees` ADD COLUMN `description` VARCHAR(191) NULL,
    MODIFY `processId` INTEGER NULL,
    MODIFY `varietyId` INTEGER NULL,
    MODIFY `originId` INTEGER NULL;

-- AlterTable
ALTER TABLE `methods` DROP COLUMN `grind`,
    ADD COLUMN `grindId` INTEGER NULL;

-- AlterTable
ALTER TABLE `mimes` DROP COLUMN `class`;

-- AlterTable
ALTER TABLE `orders` DROP COLUMN `status`,
    ADD COLUMN `statusId` INTEGER NULL;

-- AlterTable
ALTER TABLE `processes` DROP COLUMN `type`;

-- AlterTable
ALTER TABLE `products` DROP COLUMN `grind`,
    DROP COLUMN `roast`,
    ADD COLUMN `grindId` INTEGER NULL,
    ADD COLUMN `roastId` INTEGER NULL;

-- AlterTable
ALTER TABLE `roles` MODIFY `name` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Roast` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Grind` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `status` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `coffees` ADD CONSTRAINT `coffees_processId_fkey` FOREIGN KEY (`processId`) REFERENCES `processes`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `coffees` ADD CONSTRAINT `coffees_varietyId_fkey` FOREIGN KEY (`varietyId`) REFERENCES `varieties`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `coffees` ADD CONSTRAINT `coffees_originId_fkey` FOREIGN KEY (`originId`) REFERENCES `origins`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_grindId_fkey` FOREIGN KEY (`grindId`) REFERENCES `Grind`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_roastId_fkey` FOREIGN KEY (`roastId`) REFERENCES `Roast`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `methods` ADD CONSTRAINT `methods_grindId_fkey` FOREIGN KEY (`grindId`) REFERENCES `Grind`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orders` ADD CONSTRAINT `orders_statusId_fkey` FOREIGN KEY (`statusId`) REFERENCES `status`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
