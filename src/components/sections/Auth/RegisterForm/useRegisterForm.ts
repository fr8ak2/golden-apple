import { useRouter } from 'next/navigation';
import { useFormik, FormikHelpers } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { RegisterSchema, type RegisterInput } from '@/lib/schemas/auth';

export const useRegisterForm = () => {
	const router = useRouter();

	const initialValues: RegisterInput = {
		name: '',
		email: '',
		password: '',
		confirmPassword: '',
	};

	const registerFormHandler = useFormik({
		initialValues,
		validateOnBlur: false,
		validateOnChange: false,
		validationSchema: toFormikValidationSchema(RegisterSchema),
		onSubmit: async (values: RegisterInput, actions: FormikHelpers<RegisterInput>) => {
			try {
				const response = await fetch('/api/auth/register', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(values),
				});

				if (!response.ok) {
					const error = await response.json();
					actions.setStatus({ error: error.message });
					return;
				}

				router.push('/login?registered=true');
			} catch (error) {
				actions.setStatus({ error: `An error occurred during registration: ${error}` });
			}
		},
	});

	return {
		registerFormHandler,
	};
};
