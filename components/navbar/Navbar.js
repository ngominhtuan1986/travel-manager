import { Menu } from 'lucide-react';

const Navbar = () => {
	return (
		<div className="py-4 border-b flex justify-between items-center">
			<div className="font-black">TRAVEL MANAGER</div>
			<div className="flex gap-2">
				<div className="btn">Login</div>
				<div className="btn">Register</div>
				<div className="btn">Logout</div>
				<div className="btn">
					<div>User</div>
					<Menu />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
