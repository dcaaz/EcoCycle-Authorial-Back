import { Adress } from "@/protocols";
import prisma from "../config/database";

async function findAdress(userid: number) {
  return prisma.adress.findFirst({
    where: {
      userid
    },
    select: {
      cep: true,
      name: true,
      neighborhood: true,
      phone: true
    }
  })
}

async function findAllCeps() {
  return prisma.adress.findMany({
    select: {
      cep: true,
      name: true
    }
  })
}

async function createAdress(adress: Adress, userid: number) {
  return prisma.adress.create({
    data: {
      userid,
      name: adress.name,
      cep: adress.cep,
      street: adress.street,
      number: adress.number,
      complement: adress.complement,
      reference: adress.reference,
      city: adress.city,
      state: adress.state,
      neighborhood: adress.neighborhood,
      phone: adress.phone,
      profile: adress.profile
    }
  })
}

const adressRepository = {
  createAdress,
  findAdress,
  findAllCeps
}

export default adressRepository