import { PrismaClient } from "@prisma/client";

// Use a global variable to store the PrismaClient instance in development
let prisma;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!globalThis.prisma) {
    globalThis.prisma = new PrismaClient();
  }
  prisma = globalThis.prisma;
}

export const db = prisma;
