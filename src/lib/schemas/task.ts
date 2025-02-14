import { z } from 'zod';

export const TaskSchema = z.object({
	id: z.string().optional(),
	title: z.string({ required_error: 'Enter task title' }),
	description: z.string().nullable(),
	completed: z.boolean().default(false),
	userId: z.string(),
	createdAt: z.date().optional(),
	updatedAt: z.date().optional(),
});

export const CreateTaskSchema = TaskSchema.omit({
	id: true,
	userId: true,
	createdAt: true,
	updatedAt: true,
});

export type Task = z.infer<typeof TaskSchema>;
export type CreateTaskInput = z.infer<typeof CreateTaskSchema>;
