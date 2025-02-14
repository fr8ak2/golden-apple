'use server';

import prisma from '@/lib/prisma/client/prisma-client';

export const getUserByEmail = async (email: string) => {
	try {
		return prisma.user.findUnique({ where: { email } });
	} catch (error) {
		throw new Error(`${error}`);
	}
};

export const getUserById = async (id: string) => {
	try {
		return prisma.user.findUnique({ where: { id } });
	} catch (error) {
		throw new Error(`${error}`);
	}
};
