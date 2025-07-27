-- CreateTable
CREATE TABLE `Url` (
    `id` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `longUrl` VARCHAR(191) NOT NULL,
    `clicks` INTEGER NOT NULL,

    UNIQUE INDEX `Url_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
