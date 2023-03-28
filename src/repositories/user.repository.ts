import prisma from "../config/database";

async function findeUser(email: string){
  return prisma.user.findFirst({
    where: {
        email
    }
  }) 
}

async function createUser(email: string, password: string){
  return prisma.user.create({
    data: {
        email,
        password
    }
  })  
}

const userRepository = {
    createUser,
    findeUser
}

export default userRepository;