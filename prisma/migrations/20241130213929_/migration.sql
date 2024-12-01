-- AlterTable
ALTER TABLE "Projects" ADD COLUMN     "demoUrl" TEXT,
ADD COLUMN     "githubUrl" TEXT;

-- AlterTable
ALTER TABLE "Skills" ADD COLUMN     "description" TEXT;

-- CreateTable
CREATE TABLE "Tags" (
    "id" TEXT NOT NULL,
    "tagName" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,

    CONSTRAINT "Tags_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Tags" ADD CONSTRAINT "Tags_id_fkey" FOREIGN KEY ("id") REFERENCES "Projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;
