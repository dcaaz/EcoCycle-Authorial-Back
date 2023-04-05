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

async function createSessionUser(userId: number, userToken: string) {
  return prisma.session.create({
    data: {
        userid: userId,
        token: userToken
    }
  })  
}


const userRepository = {
    createUser,
    findeUser, 
    createSessionUser
}

export default userRepository;