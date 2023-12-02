import { PrismaClient } from "@prisma/client";
import { Periodicals } from "./periodical";

const prisma = new PrismaClient();
async function main() {
  await prisma.user.create({
    data: {
      name: "Andre",
      email: "deh.hgl@gmail.com",
      password: "$2b$12$yizjTLJJdaLJPZntnMeHJOu4bWn8CFri4M6xmZLPV1pQ4SAKqteAu",
    }
  })
  await prisma.user.create({
    data: {
      name: "Andre Henrique",
      email: "andre.hgl@gmail.com",
      password: "$2b$12$yizjTLJJdaLJPZntnMeHJOu4bWn8CFri4M6xmZLPV1pQ4SAKqteAu",
    }
  })
  await prisma.periodical.createMany({
    data: [...Periodicals]
  })
}



main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log('Erro ao executar seed', e);
    await prisma.$disconnect();
  });
