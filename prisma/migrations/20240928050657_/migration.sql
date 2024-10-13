/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Grind` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Roast` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `categories` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `countries` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `methods` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `mimes` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `processes` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `roles` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `status` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `tags` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `varieties` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Grind_name_key` ON `Grind`(`name`);

-- CreateIndex
CREATE UNIQUE INDEX `Roast_name_key` ON `Roast`(`name`);

-- CreateIndex
CREATE UNIQUE INDEX `categories_name_key` ON `categories`(`name`);

-- CreateIndex
CREATE UNIQUE INDEX `countries_name_key` ON `countries`(`name`);

-- CreateIndex
CREATE UNIQUE INDEX `methods_name_key` ON `methods`(`name`);

-- CreateIndex
CREATE UNIQUE INDEX `mimes_name_key` ON `mimes`(`name`);

-- CreateIndex
CREATE UNIQUE INDEX `processes_name_key` ON `processes`(`name`);

-- CreateIndex
CREATE UNIQUE INDEX `roles_name_key` ON `roles`(`name`);

-- CreateIndex
CREATE UNIQUE INDEX `status_name_key` ON `status`(`name`);

-- CreateIndex
CREATE UNIQUE INDEX `tags_name_key` ON `tags`(`name`);

-- CreateIndex
CREATE UNIQUE INDEX `varieties_name_key` ON `varieties`(`name`);
