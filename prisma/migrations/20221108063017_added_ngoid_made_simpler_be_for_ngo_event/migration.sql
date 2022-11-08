/*
  Warnings:

  - You are about to drop the `NGOforEvent` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `NGOId` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "NGOforEvent" DROP CONSTRAINT "NGOforEvent_eventId_fkey";

-- DropForeignKey
ALTER TABLE "NGOforEvent" DROP CONSTRAINT "NGOforEvent_ngoId_fkey";

-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "NGOId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "NGOforEvent";

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_NGOId_fkey" FOREIGN KEY ("NGOId") REFERENCES "NGO"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
