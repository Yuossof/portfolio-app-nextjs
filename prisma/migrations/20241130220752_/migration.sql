-- DropForeignKey
ALTER TABLE "ProjectsImages" DROP CONSTRAINT "ProjectsImages_id_fkey";

-- DropForeignKey
ALTER TABLE "Tags" DROP CONSTRAINT "Tags_id_fkey";

-- AlterTable
ALTER TABLE "ProjectsImages" ADD COLUMN     "projectId" TEXT;

-- AlterTable
ALTER TABLE "Tags" ALTER COLUMN "projectId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Tags" ADD CONSTRAINT "Tags_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectsImages" ADD CONSTRAINT "ProjectsImages_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;
