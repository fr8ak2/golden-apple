import prisma from '@/lib/prisma/client/prisma-client';

async function main() {
	const users = await prisma.user.create({
		data: {
			name: 'John',
			email: 'test@gmail.com',
			password: '123456789',
		},
	});

	console.log(users);
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
