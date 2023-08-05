'use client';

import { Menu, Search } from 'lucide-react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

const Navbar = () => {
	const user = true;
	const session = useSession();
	if (session.status === 'loading') {
		return;
	}
	return (
		<div className="py-4 border-b flex justify-between items-center">
			<Link href="/" className="font-black">
				TRAVEL MANAGER
			</Link>
			<div className="flex gap-2">
				{!user && (
					<>
						<div className="btn">Login</div>
						<div className="btn">Register</div>
					</>
				)}
				{user && (
					<div className="flex gap-2 items-center">
						<div className="px-2 py-1 bg-white border rounded transition w-auto flex items-center btnFocus">
							<input type="text" placeholder="search" className="w-full" />
							<Search size={15}/>
						</div>
						<div className="group transition relative">
							<div className="btn flex items-center gap-2">
								<div>User</div>
								<Menu size={18} />
							</div>
							<div className="hidden group-hover:block absolute right-0 top-full">
								<div className="pt-2 flex flex-col gap-2 items-end whitespace-nowrap">
									<Link href="/" className="btn">
										User settings
									</Link>
									<Link href="/dashboard" className="btn">
										Dashboard
									</Link>
									<div className="btn">Logout</div>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Navbar;
