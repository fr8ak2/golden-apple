'use client';

import { useSession } from 'next-auth/react';
import { Button } from '@/components/common/Button/Button';
import { LoadingSpinner } from '@/components/common/LoadingSpinner/LoadingSpinner';
import { useHeader } from './useHeader';

export default function Header() {
	const { data: session, status } = useSession();
	const { handleSignOut } = useHeader();

	return (
		<header className="bg-white shadow">
			<nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-16 items-center">
					<div className="font-bold text-xl">Tasks Dashboard</div>

					<div className="flex items-center gap-4">
						{status === 'loading' ? (
							<LoadingSpinner />
						) : (
							<>
								{session?.user?.name && (
									<span className="text-sm text-gray-600">Welcome, {session.user.name}</span>
								)}
								{session && (
									<Button variant="ghost" onClick={handleSignOut}>
										Sign Out
									</Button>
								)}
							</>
						)}
					</div>
				</div>
			</nav>
		</header>
	);
}
