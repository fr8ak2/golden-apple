import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { TaskForm } from '@/components/sections/Dashboard/TaskForm/TaskForm';
import { TaskList } from '@/components/sections/Dashboard/TaskList/TaskList';
import { Tasks } from '@/components/sections/Dashboard/Tasks/Tasks';

const TasksPage = async () => {
	const session = await auth();

	if (!session) redirect('/login');

	return (
		<div className="max-w-4xl mx-auto p-6">
			<h1 className="text-2xl font-bold mb-6">My Tasks</h1>

			<div className="mb-8">
				<TaskForm />
			</div>

			<TaskList>
				<Tasks />
			</TaskList>
		</div>
	);
};

export default TasksPage;
