-- AlterTable
ALTER TABLE `siswa` ADD COLUMN `cretated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `birth` VARCHAR(191) NOT NULL;
