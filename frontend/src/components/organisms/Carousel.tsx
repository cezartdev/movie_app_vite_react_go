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
				<img
					src={EndGame}
					className='w-full'
					alt='imagen'
				/>
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
