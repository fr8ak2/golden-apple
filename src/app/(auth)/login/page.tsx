import { LoginForm } from '@/components/sections/Auth/LoginForm/LoginForm';
import Link from 'next/link';

const LoginPage = async () => {
	return (
		<>
			<h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 mb-6">Log In</h2>

			<LoginForm />

			<p className="mt-6 text-center text-sm text-gray-600">
				{`Don't have an account?`}{' '}
				<Link href="/register" className="font-medium text-blue-600 hover:text-blue-500">
					Register here
				</Link>
			</p>
		</>
	);
};

export default LoginPage;
