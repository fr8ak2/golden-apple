import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { PropsWithChildren } from 'react';

export const AuthLayout = async ({ children }: PropsWithChildren) => {
	const session = await auth();

	if (session) redirect('/tasks');

	return (
		<div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-50">
			<div className="sm:mx-auto sm:w-full sm:max-w-md">
				<h1 className="text-center text-3xl font-bold tracking-tight text-gray-900">Tasks Application</h1>
				<div className="mt-8">
					<div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">{children}</div>
				</div>
			</div>

			<div className="mt-4 text-center text-sm text-gray-600">
				<span>
					Current Date and Time (UTC):{' '}
					<time dateTime={new Date().toISOString()} className="font-mono">
						{new Date().toISOString().replace('T', ' ').slice(0, 19)}
					</time>
				</span>
			</div>
		</div>
	);
};
