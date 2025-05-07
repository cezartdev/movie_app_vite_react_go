import Card from '../organisms/Card';
import Carousel from '../organisms/Carousel';

export default function HomeTemplate() {
	return (
		<>
			<div>
				<Carousel />

				<div className='grid grid-cols-3 gap-4'>
					<Card />
					<Card />
					<Card />
				</div>
			</div>
		</>
	);
}
