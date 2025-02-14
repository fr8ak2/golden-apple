import { forwardRef } from 'react';
import { InputProps } from './Interfaces';

export const Input = forwardRef<HTMLInputElement, InputProps>(({ className, type, error, ...props }, ref) => {
	return (
		<div className="relative">
			<input
				type={type}
				className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 ${error ? 'border-red-500' : ''} ${className}`}
				ref={ref}
				{...props}
			/>
			{error && <span className="mt-1 text-xs text-red-500">{error}</span>}
		</div>
	);
});

Input.displayName = 'Input';
