import { useFormik, FormikHelpers } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { CreateTaskSchema, type CreateTaskInput } from '@/lib/schemas/task';
import { createTask } from '@/utils/actions/tasks';

export const useTaskForm = () => {
	const initialValues: CreateTaskInput = {
		title: '',
		description: '',
		completed: false,
	};

	const taskFormHandler = useFormik({
		initialValues,
		validateOnBlur: false,
		validateOnChange: false,
		validationSchema: toFormikValidationSchema(CreateTaskSchema),
		onSubmit: async (values: CreateTaskInput, actions: FormikHelpers<CreateTaskInput>) => {
			try {
				await createTask(values);
				actions.resetForm();
			} catch (error) {
				actions.setStatus({ error: `Failed to create task: ${error}` });
			}
		},
	});

	return { taskFormHandler };
};
