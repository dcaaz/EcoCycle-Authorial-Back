import prisma from "../config/database";

async function findeUser(email: string){
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

const userRepository = {
    createUser,
    findeUser
}

export default userRepository;