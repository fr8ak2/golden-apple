import { LoadingSpinner } from '@/components/common/LoadingSpinner/LoadingSpinner';

const DashboardLoading = () => {
	return (
		<div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8">
			<div className="sm:mx-auto sm:w-full sm:max-w-md">
				<div className="text-center">
					<LoadingSpinner />
					<p className="mt-2 text-sm text-gray-600">Loading...</p>
				</div>
			</div>
		</div>
	);
};

export default DashboardLoading;
