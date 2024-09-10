import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

export async function getAllUsers(): Promise<User[]> {
  return await prisma.user.findMany();
}

export async function getUserById(id: number): Promise<User | null> {
  return await prisma.user.findUnique({
    where: {
      id: id,
    },
  });
}

export async function getUserByEmail(email: string): Promise<User | null> {
  return await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
}

