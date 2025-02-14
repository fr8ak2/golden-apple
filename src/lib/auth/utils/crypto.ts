'use server';

import { createHash } from 'crypto';

export async function hashPassword(password: string): Promise<string> {
	return createHash('sha256').update(password).digest('hex');
}

export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
	const inputHash = await hashPassword(password);
	return inputHash === hashedPassword;
}
