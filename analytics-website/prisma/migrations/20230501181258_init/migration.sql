-- CreateTable
CREATE TABLE "Stats" (
    "id" TEXT NOT NULL,
    "events" JSONB NOT NULL,
    "gysSessionId" TEXT NOT NULL,

    CONSTRAINT "Stats_pkey" PRIMARY KEY ("id")
);
