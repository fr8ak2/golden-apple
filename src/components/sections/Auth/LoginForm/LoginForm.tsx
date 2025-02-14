'use client';

import { Button } from '@/components/common/Button/Button';
import { Input } from '@/components/common/Input/Input';
import { useLoginForm } from './useLoginForm';

export const LoginForm = () => {
	const { loginFormHandler } = useLoginForm();

	return (
		<form onSubmit={loginFormHandler.handleSubmit} className="space-y-4" noValidate>
			{loginFormHandler.status?.error && (
				<div className="p-3 bg-red-100 text-red-600 rounded">{loginFormHandler.status.error}</div>
			)}

			<div>
				<Input
					type="email"
					name="email"
					placeholder="Email"
					value={loginFormHandler.values.email}
					onChange={loginFormHandler.handleChange}
					error={loginFormHandler.touched.email ? loginFormHandler.errors.email : undefined}
				/>
			</div>

			<div>
				<Input
					type="password"
					name="password"
					placeholder="Password"
					value={loginFormHandler.values.password}
					onChange={loginFormHandler.handleChange}
					error={loginFormHandler.touched.password ? loginFormHandler.errors.password : undefined}
				/>
			</div>

			<Button type="submit" disabled={loginFormHandler.isSubmitting} className="w-full">
				{loginFormHandler.isSubmitting ? 'Logging in...' : 'Log In'}
			</Button>
		</form>
	);
};
