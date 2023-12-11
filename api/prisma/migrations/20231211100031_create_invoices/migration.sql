-- CreateTable
CREATE TABLE "invoices" (
    "id" TEXT NOT NULL,
    "payer_name" TEXT NOT NULL,
    "status" INTEGER NOT NULL,
    "identification" TEXT NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "chargedIn" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "paidAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "bankSlip" TEXT,
    "nfIdentification" TEXT,

    CONSTRAINT "invoices_pkey" PRIMARY KEY ("id")
);
