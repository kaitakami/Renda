-- CreateTable
CREATE TABLE "Render" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "mainImage" TEXT NOT NULL,

    CONSTRAINT "Render_pkey" PRIMARY KEY ("id")
);
