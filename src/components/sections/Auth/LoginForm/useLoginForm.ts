import { useRouter } from 'next/navigation';
import { useFormik, FormikHelpers } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { LoginSchema, type LoginInput } from '@/lib/schemas/auth';
import { signIn } from 'next-auth/react';

export const useLoginForm = () => {
	const router = useRouter();

	const initialValues: LoginInput = {
		email: '',
		password: '',
	};

	const loginFormHandler = useFormik({
		initialValues,
		validateOnBlur: false,
		validateOnChange: false,
		validationSchema: toFormikValidationSchema(LoginSchema),
		onSubmit: async (values: LoginInput, actions: FormikHelpers<LoginInput>) => {
			try {
				const result = await signIn('credentials', {
					email: values.email,
					password: values.password,
					redirect: false,
				});

				if (result?.error) {
					actions.setStatus({ error: 'Invalid credentials' });
					return;
				}

				router.push('/tasks');
				router.refresh();
			} catch (error) {
				actions.setStatus({ error: `An error occurred during login | ${error}` });
			}
		},
	});

	return {
		loginFormHandler,
	};
};
