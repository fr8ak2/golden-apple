import { PropsWithChildren, Suspense } from 'react';

export const TaskList = ({ children }: PropsWithChildren) => {
	return <Suspense fallback={<div>Loading tasks...</div>}>{children}</Suspense>;
};
