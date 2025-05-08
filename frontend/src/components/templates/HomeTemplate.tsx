import Card from '../organisms/Card';
import Carousel from '../organisms/Carousel';

export default function HomeTemplate() {
	return (
		<main>
			<Carousel />

			<div className='grid-fluid container'>
				<Card />
				<Card />
				<Card />
			</div>1
		</main>
	);
}
