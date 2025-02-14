import { ButtonVariant, ButtonSize, ButtonProps } from './Interfaces';

export const useButton = ({ className, variant, size }: Partial<ButtonProps>) => {
	const baseStyles =
		'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none cursor-pointer disabled:opacity-50 disabled:pointer-events-none';

	const variantStyles: Record<ButtonVariant, string> = {
		default: 'bg-blue-600 text-white hover:bg-blue-700',
		destructive: 'bg-red-600 text-white hover:bg-red-700',
		outline: 'border border-gray-300 bg-transparent hover:bg-gray-50',
		secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
		ghost: 'hover:bg-gray-100 hover:text-gray-900',
		link: 'underline-offset-4 hover:underline text-blue-600',
	};

	const sizeStyles: Record<ButtonSize, string> = {
		default: 'h-10 py-2 px-4',
		sm: 'h-9 px-3',
		lg: 'h-11 px-8',
		icon: 'h-10 w-10',
	};

	const combinedClassName = `
      ${baseStyles}
      ${variantStyles[variant || 'default']}
      ${sizeStyles[size || 'default']}
      ${className}`.trim();

	return {
		combinedClassName,
	};
};
