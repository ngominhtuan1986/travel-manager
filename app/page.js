import Navbar from '@/components/navbar/Navbar';

export const metadata = {
	title: 'Travel Manager',
	description: 'Travel Manager',
};

export default function Home() {
	return (
		<main>
			<div className="container mx-auto">
				<Navbar />
			</div>
		</main>
	);
}
