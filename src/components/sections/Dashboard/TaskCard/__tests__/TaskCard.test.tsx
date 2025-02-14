import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { TaskCard } from '../TaskCard';
import { type Task } from '@/lib/schemas/task';
import { deleteTask } from '@/utils/actions/tasks';

jest.mock('@/utils/actions/tasks', () => ({
	updateTask: jest.fn(),
	deleteTask: jest.fn(),
}));

describe('TaskCard', () => {
	const mockTask: Task = {
		id: '1',
		title: 'Test Task',
		description: 'Test Description',
		completed: false,
		userId: 'user1',
		createdAt: new Date(),
		updatedAt: new Date(),
	};

	it('renders task details correctly', () => {
		render(<TaskCard task={mockTask} />);

		expect(screen.getByText('Test Task')).toBeInTheDocument();
		expect(screen.getByText('Test Description')).toBeInTheDocument();
		expect(screen.getByRole('checkbox')).not.toBeChecked();
	});

	it('renders completed task with appropriate styling', () => {
		const completedTask = { ...mockTask, completed: true };
		render(<TaskCard task={completedTask} />);

		expect(screen.getByRole('checkbox')).toBeChecked();
		expect(screen.getByText('Test Task')).toHaveClass('line-through');
	});

	it('handles task deletion', async () => {
		render(<TaskCard task={mockTask} />);

		fireEvent.click(screen.getByText('Delete'));

		await waitFor(() => {
			expect(deleteTask).toHaveBeenCalledWith(mockTask.id);
		});
	});
});
