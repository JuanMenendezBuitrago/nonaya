/*
  Warnings:

  - You are about to drop the `_CoffeeToNote` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_CoffeeToNote` DROP FOREIGN KEY `_CoffeeToNote_A_fkey`;

-- DropForeignKey
ALTER TABLE `_CoffeeToNote` DROP FOREIGN KEY `_CoffeeToNote_B_fkey`;

-- DropTable
DROP TABLE `_CoffeeToNote`;

-- CreateTable
CREATE TABLE `_NoteToProduct` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_NoteToProduct_AB_unique`(`A`, `B`),
    INDEX `_NoteToProduct_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_NoteToProduct` ADD CONSTRAINT `_NoteToProduct_A_fkey` FOREIGN KEY (`A`) REFERENCES `notes`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_NoteToProduct` ADD CONSTRAINT `_NoteToProduct_B_fkey` FOREIGN KEY (`B`) REFERENCES `products`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
