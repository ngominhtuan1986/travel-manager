'use client';

import { useSession } from 'next-auth/react';

const page = () => {
	const session = useSession();

	if (session.status === 'loading') return;
	return <div>Dashboard</div>;
};

export default page;
