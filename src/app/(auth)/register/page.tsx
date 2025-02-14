import { RegisterForm } from '@/components/sections/Auth/RegisterForm/RegisterForm';
import Link from 'next/link';

const RegisterPage = async () => {
	return (
		<>
			<h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 mb-6">
				Create an account
			</h2>

			<RegisterForm />

			<div className="mt-6 text-center text-sm text-gray-600">
				Already have an account?{' '}
				<Link href="/login" className="font-medium text-blue-600 hover:text-blue-500">
					Sign in here
				</Link>
			</div>
		</>
	);
};

export default RegisterPage;
