import Link from 'next/link';
import { Button } from '@/components/common/Button/Button';

const NotFound = () => {
	return (
		<div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
			<div className="text-center">
				<h2 className="text-3xl font-bold text-gray-900 mb-4">404 - Page Not Found</h2>
				<p className="text-gray-600 mb-6">The page you are looking for does not exist.</p>
				<Link href="/">
					<Button variant="default">Return Home</Button>
				</Link>
			</div>
		</div>
	);
};

export default NotFound;
