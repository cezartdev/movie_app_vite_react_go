import { Play } from 'lucide-react';
import EndGame from '../../assets/img/endgame.png';
import Interstellar from '../../assets/img/interstellar.avif';
import Oppenheimer from '../../assets/img/oppenheimer.jpg';
import ToyStory from '../../assets/img/toy_story_4.webp';

export default function Carousel() {
	return (
		<section className='carousel w-full h-150'>
			<div
				id='slide1'
				className='carousel-item relative w-full'
			>
				<div className='absolute inset-0 bg-black opacity-70 z-0' />
				<img
					src={EndGame}
					className='w-full'
					alt='imagen'
				/>
				<div className='absolute top-1/2 left-1/2  md:left-5/12 lg:left-4/12 xl:left-3/12 transform -translate-x-1/2 -translate-y-1/2 z-10 '>
					<div className='flex flex-col max-w-100 gap-8'>
						<p className='text-xl'>
							May, 17 Action, Super heroes
						</p>

						<p className=' text-6xl font-black'>
							Avengers Endgame
						</p>

						<div className='flex gap-4'>
							<p className='text-lg font-bold'>Score: </p>
							<div className='rating'>
								<input
									type='radio'
									name='rating-2'
									className='mask mask-star-2 bg-orange-400'
									aria-label='1 star'
								/>
								<input
									type='radio'
									name='rating-2'
									className='mask mask-star-2 bg-orange-400'
									aria-label='2 star'
									defaultChecked
								/>
								<input
									type='radio'
									name='rating-2'
									className='mask mask-star-2 bg-orange-400'
									aria-label='3 star'
								/>
								<input
									type='radio'
									name='rating-2'
									className='mask mask-star-2 bg-orange-400'
									aria-label='4 star'
								/>
								<input
									type='radio'
									name='rating-2'
									className='mask mask-star-2 bg-orange-400'
									aria-label='5 star'
								/>
							</div>
						</div>

						<div className='flex gap-8 justify-between'>
							<button
								type='button'
								className='btn btn-primary flex-1'
							>
								<div className='rounded-full p-1'>
									<Play className='fill-base-content size-4' />
								</div>
								Watch Now
							</button>
							<button
								type='button'
								className='btn btn-outline hover:bg-base-content hover:text-base-100 flex-1'
							>
								Trailer
							</button>
						</div>
					</div>
				</div>
				<div className='absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between'>
					<a href='#slide4' className='btn btn-circle'>
						❮
					</a>
					<a href='#slide2' className='btn btn-circle'>
						❯
					</a>
				</div>
			</div>
			<div
				id='slide2'
				className='carousel-item relative w-full'
			>
				<div className='absolute inset-0 bg-black opacity-70 z-0' />
				<img
					src={ToyStory}
					className='w-full'
					alt='imagen'
				/>
				<div className='absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between'>
					<a href='#slide1' className='btn btn-circle'>
						❮
					</a>
					<a href='#slide3' className='btn btn-circle'>
						❯
					</a>
				</div>
			</div>
			<div
				id='slide3'
				className='carousel-item relative w-full'
			>
				<div className='absolute inset-0 bg-black opacity-70 z-0' />
				<img
					src={Oppenheimer}
					className='w-full'
					alt='imagen'
				/>
				<div className='absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between'>
					<a href='#slide2' className='btn btn-circle'>
						❮
					</a>
					<a href='#slide4' className='btn btn-circle'>
						❯
					</a>
				</div>
			</div>
			<div
				id='slide4'
				className='carousel-item relative w-full'
			>
				<div className='absolute inset-0 bg-black opacity-70 z-0' />
				<img
					src={Interstellar}
					className='w-full'
					alt='imagen'
				/>
				<div className='absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between'>
					<a href='#slide3' className='btn btn-circle'>
						❮
					</a>
					<a href='#slide1' className='btn btn-circle'>
						❯
					</a>
				</div>
			</div>
		</section>
	);
}
