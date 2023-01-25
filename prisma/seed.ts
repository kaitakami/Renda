import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const main = async () => {
  const render = await prisma.render.create({
    data: {
      title: "Check my super car!",
      description:
        "Neon 90s Toyota hand made car, I used blender for the modeling.",
      mainImage:
        "https://images.unsplash.com/photo-1630769660701-3454835913dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80",
    },
  });
};

main()
  .catch((err) => {
    console.log(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
