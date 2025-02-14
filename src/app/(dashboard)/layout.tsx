import { PropsWithChildren } from 'react';
import { DashboardLayout } from '@/components/layouts/DashboardLayout/DashboardLayout';

const DefaultLayout = ({ children }: PropsWithChildren) => {
	return <DashboardLayout>{children}</DashboardLayout>;
};

export default DefaultLayout;
