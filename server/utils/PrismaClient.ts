import { PrismaClient } from "@prisma/client";

export const usePrisma = () => {
	return new PrismaClient();
};
