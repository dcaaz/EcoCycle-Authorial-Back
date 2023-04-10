import { Adress } from "@/protocols";
import prisma from "../config/database";

async function findeUserByEmail(email: string){
  return prisma.user.findFirst({
    where: {
        email
    }
  }) 
}

async function createUser(email: string, hashedPassword: string){
  return prisma.user.create({
    data: {
        email,
        password: hashedPassword
    }
  })  
}

async function createSessionUser(userId: number, userToken: string) {
  return prisma.session.create({
    data: {
        userid: userId,
        token: userToken
    }
  })  
}

async function findAdress(userid:number) {
  return prisma.adress.findFirst({
    where: {
        userid
    }
  }) 
}

async function createAdress(adress: Adress, userId: number){
  return prisma.adress.create({
    data: {
      userid: userId,
      name: adress.name,
      cep: adress.cep,
      street: adress.street,
      number: adress.number,
      complement: adress.complement,
      reference: adress.reference,
      city: adress.city,
      state: adress.state,
      neighborhood: adress.neighborhood,
      profile: adress.profile
    }
  })
}


const userRepository = {
    createUser,
    findeUserByEmail, 
    createSessionUser,
    findAdress,
    createAdress
}

export default userRepository;