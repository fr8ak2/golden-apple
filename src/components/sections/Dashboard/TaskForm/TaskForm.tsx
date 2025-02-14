'use client';

import { Button } from '@/components/common/Button/Button';
import { Input } from '@/components/common/Input/Input';
import { useTaskForm } from './useTaskForm';

export const TaskForm = () => {
	const { taskFormHandler } = useTaskForm();

	return (
		<form onSubmit={taskFormHandler.handleSubmit} className="space-y-4">
			{taskFormHandler.status?.error && (
				<div className="p-3 bg-red-100 text-red-600 rounded">{taskFormHandler.status.error}</div>
			)}

			<div>
				<Input
					type="text"
					name="title"
					placeholder="Task title"
					value={taskFormHandler.values.title}
					onChange={taskFormHandler.handleChange}
					onBlur={taskFormHandler.handleBlur}
					error={taskFormHandler.touched.title ? taskFormHandler.errors.title : undefined}
				/>
			</div>

			<div>
				<Input
					type="text"
					name="description"
					placeholder="Task description (optional)"
					value={taskFormHandler.values.description || ''}
					onChange={taskFormHandler.handleChange}
					onBlur={taskFormHandler.handleBlur}
					error={taskFormHandler.touched.description ? taskFormHandler.errors.description : undefined}
				/>
			</div>

			<Button type="submit" disabled={taskFormHandler.isSubmitting}>
				{taskFormHandler.isSubmitting ? 'Creating...' : 'Create Task'}
			</Button>
		</form>
	);
};
