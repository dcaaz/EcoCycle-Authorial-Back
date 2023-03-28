import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
   let user = await prisma.user.findFirst();
    if (!user) {
    await prisma.user.create({
            data: {
                email: 'teste@gmail.com',
                password: 'testuserpassword',
            },
        }) 
    }
}

main()
    .then(() => {
        console.log("Successful registration");
    })
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
 