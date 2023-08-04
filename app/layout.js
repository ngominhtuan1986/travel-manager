"use client"

import './globals.css';
import { Nunito } from 'next/font/google';
import { SessionProvider } from 'next-auth/react';

const inter = Nunito({ subsets: ['latin'] });

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<SessionProvider>{children}</SessionProvider>
			</body>
		</html>
	);
}
