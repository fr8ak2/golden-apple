'use client';

import { Button } from '@/components/common/Button/Button';
import { Input } from '@/components/common/Input/Input';
import { useRegisterForm } from './useRegisterForm';

export const RegisterForm = () => {
	const { registerFormHandler } = useRegisterForm();

	return (
		<form onSubmit={registerFormHandler.handleSubmit} className="space-y-4">
			{registerFormHandler.status?.error && (
				<div className="p-3 bg-red-100 text-red-600 rounded">{registerFormHandler.status.error}</div>
			)}

			<div>
				<Input
					type="text"
					name="name"
					placeholder="Name"
					value={registerFormHandler.values.name}
					onChange={registerFormHandler.handleChange}
					onBlur={registerFormHandler.handleBlur}
					error={registerFormHandler.touched.name ? registerFormHandler.errors.name : undefined}
				/>
			</div>

			<div>
				<Input
					type="email"
					name="email"
					placeholder="Email"
					value={registerFormHandler.values.email}
					onChange={registerFormHandler.handleChange}
					onBlur={registerFormHandler.handleBlur}
					error={registerFormHandler.touched.email ? registerFormHandler.errors.email : undefined}
				/>
			</div>

			<div>
				<Input
					type="password"
					name="password"
					placeholder="Password"
					value={registerFormHandler.values.password}
					onChange={registerFormHandler.handleChange}
					onBlur={registerFormHandler.handleBlur}
					error={registerFormHandler.touched.password ? registerFormHandler.errors.password : undefined}
				/>
			</div>

			<div>
				<Input
					type="password"
					name="confirmPassword"
					placeholder="Confirm Password"
					value={registerFormHandler.values.confirmPassword}
					onChange={registerFormHandler.handleChange}
					onBlur={registerFormHandler.handleBlur}
					error={
						registerFormHandler.touched.confirmPassword
							? registerFormHandler.errors.confirmPassword
							: undefined
					}
				/>
			</div>

			<Button type="submit" disabled={registerFormHandler.isSubmitting} className="w-full">
				{registerFormHandler.isSubmitting ? 'Registering...' : 'Register'}
			</Button>
		</form>
	);
};
