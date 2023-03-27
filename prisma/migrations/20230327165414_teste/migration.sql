-- CreateTable
CREATE TABLE "Teste" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR(40) NOT NULL,
    "password" VARCHAR(40) NOT NULL,
    "created_at" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Teste_pkey" PRIMARY KEY ("id")
);
