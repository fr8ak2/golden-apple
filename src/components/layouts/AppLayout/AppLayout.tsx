import { PropsWithChildren } from 'react';
import { AuthProviders } from '@/context/auth/AuthProvider';

const AppLayout = ({ children }: PropsWithChildren) => {
	return (
		<AuthProviders>
			<div className="page">
				<div className="page__wrapper">{children}</div>
			</div>
		</AuthProviders>
	);
};

export default AppLayout;
