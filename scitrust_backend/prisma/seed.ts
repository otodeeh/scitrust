import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
async function main() {
  await prisma.user.create({
    data: {
      name: "Andre",
      email: "deh.hgl@gmail.com",
      password: "$2b$12$bGPCMQA99UCMGTjP4RVCF.uwLvnn.6b23AToOOshmiN7U/3UaLjMe",
    }
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
