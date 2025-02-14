import { auth } from '@/auth';

export default auth((req) => {
	const isLoggedIn = !!req.auth;
	const { nextUrl } = req;

	const isApiRoute = nextUrl.pathname.startsWith('/api');
	const isAuthRoute = nextUrl.pathname.startsWith('/login') || nextUrl.pathname.startsWith('/register');

	if (isApiRoute) return;

	if (isLoggedIn && isAuthRoute) return Response.redirect(new URL('/tasks', nextUrl));
	if (!isLoggedIn && !isAuthRoute) return Response.redirect(new URL('/login', nextUrl));
});

export const config = {
	matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
