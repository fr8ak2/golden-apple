import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import AppLayout from '@/components/layouts/AppLayout/AppLayout';
import './app.css';

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'To-Do App',
	description: 'Planning to do list',
};

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
	return (
		<html lang="en" className={`${inter.variable}`}>
			<body className="antialiased">
				<AppLayout>{children}</AppLayout>
			</body>
		</html>
	);
};

export default RootLayout;
