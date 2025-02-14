import { signOut } from 'next-auth/react';

export const useHeader = () => {
	const handleSignOut = async () => {
		await signOut({ redirectTo: '/login' });
	};

	return {
		handleSignOut,
	};
};
