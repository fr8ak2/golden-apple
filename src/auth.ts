import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@auth/prisma-adapter';
import prisma from '@/lib/prisma/client/prisma-client';
import { AUTH_SESSION_AGE, AUTH_SESSION_STRATEGY, AUTH_SESSION_UPDATE } from '@/constants/auth';
import { verifyPassword } from '@/lib/auth/utils/crypto';
import { LoginSchema } from '@/lib/schemas/auth';

export const { handlers, auth } = NextAuth({
	adapter: PrismaAdapter(prisma),
	session: {
		strategy: AUTH_SESSION_STRATEGY,
		maxAge: AUTH_SESSION_AGE,
		updateAge: AUTH_SESSION_UPDATE,
	},
	pages: {
		signIn: '/login',
		newUser: '/register',
	},
	callbacks: {
		jwt: async ({ token, user }) => {
			if (user) {
				return {
					...token,
					sub: user.id,
				};
			}

			return token;
		},
		session: async ({ session, token }) => {
			return {
				...session,
				user: {
					...session.user,
					id: token.sub ?? '',
				},
			};
		},
	},
	providers: [
		CredentialsProvider({
			name: 'credentials',
			credentials: {
				email: { label: 'Email', type: 'email' },
				password: { label: 'Password', type: 'password' },
			},
			authorize: async (credentials) => {
				const parsedCredentials = LoginSchema.safeParse(credentials);
				if (!parsedCredentials.success) return null;

				const { email, password } = parsedCredentials.data;
				const user = await prisma.user.findUnique({ where: { email } });

				if (!user || !user.password) return null;

				const isPasswordValid = await verifyPassword(password, user.password);
				if (!isPasswordValid) return null;

				return user;
			},
		}),
	],
});
