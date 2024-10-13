-- AlterTable
ALTER TABLE `products` ADD COLUMN `roastDate` DATETIME(3) NULL;

-- CreateTable
CREATE TABLE `notes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `notes_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_CoffeeToNote` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_CoffeeToNote_AB_unique`(`A`, `B`),
    INDEX `_CoffeeToNote_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_CoffeeToNote` ADD CONSTRAINT `_CoffeeToNote_A_fkey` FOREIGN KEY (`A`) REFERENCES `coffees`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CoffeeToNote` ADD CONSTRAINT `_CoffeeToNote_B_fkey` FOREIGN KEY (`B`) REFERENCES `notes`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
