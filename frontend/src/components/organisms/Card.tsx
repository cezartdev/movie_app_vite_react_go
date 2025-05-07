import BackToTheFuture from '../../assets/img/back_to_the_future.webp';

export default function Card() {
	return (
		<div className='card bg-base-100 w-full max-w-96 shadow-sm hover:scale-110 transition-all duration-300'>
			<figure>
				<img src={BackToTheFuture} alt='Movie' />
			</figure>
			<div className='absolute inset-0 bg-black opacity-70' />
			<div className='card-body absolute'>
				<h2 className='card-title'>
					Card Title
					<div className='badge badge-secondary'>NEW</div>
				</h2>
				<p>
					A card component has a figure, a body part, and
					inside body there are title and actions parts
				</p>
				<div className='card-actions justify-end'>
					<div className='badge badge-outline'>Fashion</div>
					<div className='badge badge-outline'>
						Products
					</div>
				</div>
			</div>
		</div>
	);
}
