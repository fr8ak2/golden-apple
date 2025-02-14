import { TaskCard } from '@/components/sections/Dashboard/TaskCard/TaskCard';
import { getTasks } from '@/utils/actions/tasks';

export const Tasks = async () => {
	const tasks = await getTasks();

	if (tasks.length === 0) {
		return <div className="text-center py-8 text-gray-500">No tasks yet. Create your first task!</div>;
	}

	return (
		<div className="space-y-4">
			{tasks.map((task) => (
				<TaskCard key={task.id} task={task} />
			))}
		</div>
	);
};
