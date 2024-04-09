import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Export all models dynamically
Object.keys(prisma).forEach((model) => {
  if (model !== '$connect' && model !== '$disconnect') {
    const modelName = model as keyof PrismaClient;
    module.exports[model] = prisma[modelName];
  }
});

export default prisma;
