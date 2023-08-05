'use client';

import Navbar from '@/components/Navbar';

const HomeLayout = ({ children }) => {
	return (
		<div className="container mx-auto">
			<Navbar />
			{children}
		</div>
	);
};

export default HomeLayout;
