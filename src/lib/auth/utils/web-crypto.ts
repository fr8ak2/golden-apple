'use server';

const SALT_LENGTH = 16; // Length of the salt in bytes
const ITERATIONS = 100000; // Number of iterations for PBKDF2

export async function hashPassword(password: string): Promise<string> {
	const salt = crypto.getRandomValues(new Uint8Array(SALT_LENGTH));
	const passwordBuffer = new TextEncoder().encode(password);

	const passwordKey = await crypto.subtle.importKey('raw', passwordBuffer, 'PBKDF2', false, ['deriveBits']);

	const hash = await crypto.subtle.deriveBits(
		{
			name: 'PBKDF2',
			salt: salt,
			iterations: ITERATIONS,
			hash: 'SHA-256',
		},
		passwordKey,
		256,
	);

	const combined = new Uint8Array(salt.length + hash.byteLength);
	combined.set(salt);
	combined.set(new Uint8Array(hash), salt.length);

	return btoa(String.fromCharCode(...combined));
}

export async function verifyPassword(password: string, storedHash: string): Promise<boolean> {
	try {
		const combined = Uint8Array.from(atob(storedHash), (c) => c.charCodeAt(0));

		const salt = combined.slice(0, SALT_LENGTH);
		const originalHash = combined.slice(SALT_LENGTH);

		const passwordBuffer = new TextEncoder().encode(password);

		const passwordKey = await crypto.subtle.importKey('raw', passwordBuffer, 'PBKDF2', false, ['deriveBits']);

		const newHash = await crypto.subtle.deriveBits(
			{
				name: 'PBKDF2',
				salt: salt,
				iterations: ITERATIONS,
				hash: 'SHA-256',
			},
			passwordKey,
			256,
		);

		const newHashArray = new Uint8Array(newHash);
		if (originalHash.length !== newHashArray.length) {
			return false;
		}

		return originalHash.every((byte, i) => byte === newHashArray[i]);
	} catch (error) {
		console.error('Password verification error:', error);
		return false;
	}
}
