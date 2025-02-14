import { PropsWithChildren } from 'react';
import { AuthLayout } from '@/components/layouts/AuthLayout/AuthLayout';

const ProtectedLayout = ({ children }: PropsWithChildren) => {
	return <AuthLayout>{children}</AuthLayout>;
};

export default ProtectedLayout;
