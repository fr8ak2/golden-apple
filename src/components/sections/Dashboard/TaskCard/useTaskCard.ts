import { deleteTask, updateTask } from '@/utils/actions/tasks';
import { TaskCardProps } from '@/components/sections/Dashboard/TaskCard/Interfaces';

export const useTaskCard = ({ task }: TaskCardProps) => {
	const toggleComplete = async () => {
		await updateTask(task.id!, {
			completed: !task.completed,
		});
	};

	const handleDelete = async () => {
		await deleteTask(task.id!);
	};

	return {
		toggleComplete,
		handleDelete,
	};
};
