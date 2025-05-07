import PopCornSvg from '../../assets/svg/popcorn.svg?react';
export default function Footer() {
	return (
		<footer className='bg-base-300 p-4 flex flex-col items-center'>
			<PopCornSvg className='size-10' />
			<p className='text-center'>
				Movies App
				<br />
				by <span className='font-bold'>cezartdev</span>
			</p>
		</footer>
	);
}
