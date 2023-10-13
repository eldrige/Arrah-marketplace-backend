import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

const generateProducts = (count: number) => {
  const products = [];
  for (let i = 0; i < count; i++) {
    products.push({
      name: faker.word.noun(),
      image: faker.image.urlPicsumPhotos(),
      amount: +faker.finance.amount(),
      currency: faker.finance.currencyCode(),
    });
  }
  return products;
};

const seed = async () => {
  const products = generateProducts(500);
  for (const product of products) {
    await prisma.product.create({ data: product });
  }
  console.log('Seed data completed!');
};

seed()
  .catch((error) => console.error(error))
  .finally(async () => {
    await prisma.$disconnect();
  });
