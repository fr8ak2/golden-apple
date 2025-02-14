import { z } from 'zod';
import { EMAIL_REGEX } from '@/constants/regex';

const EmailFieldSchema = z
	.string({ required_error: 'Enter your email address' })
	.regex(EMAIL_REGEX, { message: 'Invalid email address' });

const NameFieldSchema = z
	.string({ required_error: 'Enter your name' })
	.trim()
	.min(2, { message: 'Name must be at least 2 characters' })
	.max(30, { message: 'Name must not exceed 30 characters' });

const BasicPasswordFieldSchema = z.string({ required_error: 'Enter your password' });

const PasswordFieldSchema = BasicPasswordFieldSchema.min(8, 'Password must be at least 8 characters').max(
	60,
	'Password must not exceed 60 characters',
);

const ConfirmPasswordFieldSchema = z.string({
	required_error: 'Please confirm your password',
});

const PasswordMatchValidation = (data: { password: string; confirmPassword: string }, context: z.RefinementCtx) => {
	if (data.password !== data.confirmPassword) {
		context.addIssue({
			code: z.ZodIssueCode.custom,
			message: "Passwords don't match",
			path: ['confirmPassword'],
		});
	}
};

export const LoginSchema = z.object({
	email: EmailFieldSchema,
	password: BasicPasswordFieldSchema,
});

export const RegisterSchema = z
	.object({
		name: NameFieldSchema,
		email: EmailFieldSchema,
		password: PasswordFieldSchema,
		confirmPassword: ConfirmPasswordFieldSchema,
	})
	.superRefine(PasswordMatchValidation);

export type LoginInput = z.infer<typeof LoginSchema>;
export type RegisterInput = z.infer<typeof RegisterSchema>;
