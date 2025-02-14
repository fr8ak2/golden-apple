import { NextResponse } from 'next/server';
import { RegisterSchema } from '@/lib/schemas/auth';
import prisma from '@/lib/prisma/client/prisma-client';
import { hashPassword } from '@/lib/auth/utils/crypto';
import { getUserByEmail } from '@/utils/actions/auth';

export async function POST(request: Request) {
	try {
		const body = await request.json();
		const { name, email, password } = RegisterSchema.parse(body);

		const existingUser = await getUserByEmail(email);

		if (existingUser) return NextResponse.json({ message: 'User already exists' }, { status: 400 });

		const hashedPassword = await hashPassword(password);

		await prisma.user.create({
			data: {
				name,
				email,
				password: hashedPassword,
			},
		});

		return NextResponse.json({ message: 'User created successfully' }, { status: 201 });
	} catch (error) {
		console.error('Registration error:', error);
		return NextResponse.json({ message: `Something went wrong` }, { status: 500 });
	}
}
