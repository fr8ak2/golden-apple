'use server';

import { revalidatePath } from 'next/cache';
import prisma from '@/lib/prisma/client/prisma-client';
import { CreateTaskSchema, TaskSchema, CreateTaskInput } from '@/lib/schemas/task';
import { auth } from '@/auth';

export const createTask = async (data: CreateTaskInput) => {
	const session = await auth();

	if (!session || !session?.user?.id) throw new Error('Unauthorized');

	const validated = CreateTaskSchema.parse(data);

	const task = await prisma.task.create({
		data: {
			...validated,
			userId: session.user?.id,
		},
	});

	revalidatePath('/tasks');
	return task;
};

export const updateTask = async (id: string, data: Partial<CreateTaskInput>) => {
	const session = await auth();

	if (!session || !session?.user?.id) throw new Error('Unauthorized');

	const validated = TaskSchema.partial().parse(data);

	const task = await prisma.task.update({
		where: {
			id,
			userId: session.user.id,
		},
		data: validated,
	});

	revalidatePath('/tasks');
	return task;
};

export const deleteTask = async (id: string) => {
	const session = await auth();

	if (!session || !session?.user?.id) throw new Error('Unauthorized');

	await prisma.task.delete({
		where: {
			id,
			userId: session.user.id,
		},
	});

	revalidatePath('/tasks');
};

export const getTasks = async () => {
	const session = await auth();

	if (!session || !session?.user?.id) throw new Error('Unauthorized');

	return prisma.task.findMany({
		where: {
			userId: session.user.id,
		},
		orderBy: {
			createdAt: 'desc',
		},
	});
};
