import { PrismaClient } from "./generated/prisma/client";

export const db = globalThis.prisma || new PrismaClient();
console.log(globalThis.prisma);
if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}
