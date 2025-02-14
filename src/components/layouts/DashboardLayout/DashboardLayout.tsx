import { PropsWithChildren } from 'react';
import Header from '@/components/sections/Dashboard/Header/Header';

export const DashboardLayout = ({ children }: PropsWithChildren) => {
	return (
		<div className="min-h-screen bg-gray-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="py-4">
					<Header />
					{children}
				</div>
			</div>
		</div>
	);
};
