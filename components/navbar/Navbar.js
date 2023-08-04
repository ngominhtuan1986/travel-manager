'use client';

import { Menu } from 'lucide-react';
import { useSession } from 'next-auth/react';

const Navbar = () => {
	const user = true;
	const session = useSession();
	if (session.status === 'loading') {
		return;
	}
	return (
		<div className="py-4 border-b flex justify-between items-center">
			<div className="font-black">TRAVEL MANAGER</div>
			<div className="flex gap-2">
				{!user && (
					<>
						<div className="btn">Login</div>
						<div className="btn">Register</div>
					</>
				)}
				{user && (
					<>
						<div className="group transition relative">
							<div className="btn flex items-center gap-2">
								<div>User</div>
								<Menu size={18} />
							</div>
							<div className="hidden group-hover:block absolute right-0 top-full">
								<div className="pt-2 flex flex-col gap-2 items-end whitespace-nowrap">
									<div className="btn">User settings</div>
									<div className="btn">Dashboard</div>
									<div className="btn">Logout</div>
								</div>
							</div>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default Navbar;
