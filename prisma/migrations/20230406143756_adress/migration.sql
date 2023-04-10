-- CreateTable
CREATE TABLE "Adress" (
    "id" SERIAL NOT NULL,
    "userid" INTEGER NOT NULL,
    "name" VARCHAR(40) NOT NULL,
    "cep" INTEGER NOT NULL,
    "street" VARCHAR(40) NOT NULL,
    "number" INTEGER NOT NULL,
    "complement" VARCHAR(40) NOT NULL,
    "reference" VARCHAR(40) NOT NULL,
    "city" VARCHAR(40) NOT NULL,
    "state" VARCHAR(40) NOT NULL,
    "neighborhood" VARCHAR(40) NOT NULL,
    "profile" VARCHAR(10) NOT NULL,
    "created_at" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Adress_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Adress" ADD CONSTRAINT "Adress_userid_fkey" FOREIGN KEY ("userid") REFERENCES "User"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
