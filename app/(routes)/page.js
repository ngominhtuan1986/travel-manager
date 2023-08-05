import AddModal from '@/components/AddModal';
import Bookings from '@/components/Bookings';
import Botbar from '@/components/Botbar';

export const metadata = {
	title: 'Travel Manager',
	description: 'Travel Manager',
};

export default function Home() {
	return (
		<div>
			<AddModal/>
			<Bookings />
			<Botbar />
		</div>
	);
}
