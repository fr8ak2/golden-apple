import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	reactStrictMode: true,
	output: 'standalone',
	experimental: {
		serverActions: {
			allowedOrigins: ['http://localhost:3000'],
		},
	}
};

export default nextConfig;
