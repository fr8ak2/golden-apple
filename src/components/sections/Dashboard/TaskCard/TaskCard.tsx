'use client';

import { Button } from '@/components/common/Button/Button';
import { TaskCardProps } from './Interfaces';
import { useTaskCard } from './useTaskCard';

export const TaskCard = ({ task }: TaskCardProps) => {
	const { toggleComplete, handleDelete } = useTaskCard({ task });

	return (
		<div className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
			<div className="flex items-center space-x-4">
				<input
					type="checkbox"
					checked={task.completed}
					onChange={toggleComplete}
					className="h-4 w-4 rounded border-gray-300"
				/>

				<div>
					<h3 className={`text-lg font-medium ${task.completed ? 'line-through text-gray-500' : ''}`}>
						{task.title}
					</h3>
					{task.description && <p className="text-sm text-gray-500">{task.description}</p>}
				</div>
			</div>

			<Button variant="destructive" size="sm" onClick={handleDelete}>
				Delete
			</Button>
		</div>
	);
};
