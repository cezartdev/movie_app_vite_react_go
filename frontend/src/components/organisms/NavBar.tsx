import { Link } from 'react-router';
export default function NavBar() {
	return (
		<nav className='navbar bg-base-100 shadow-sm'>
			<div className='flex-1'>
				<p className='text-xl font-bold'>Home</p>
			</div>
			<div className='flex-none'>
				<div className='dropdown dropdown-end'>
					<button
						type='button'
						className='btn btn-ghost btn-circle avatar'
					>
						<div className='w-10 rounded-full'>
							<img
								alt='Tailwind CSS Navbar component'
								src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
							/>
						</div>
					</button>
					<ul className='menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow border-1'>
						<li>
							<Link to='/#' className='justify-between'>
								Profile
								<span className='badge'>New</span>
							</Link>
						</li>
						<li>
							<Link to='/#'>Settings</Link>
						</li>
						<li>
							<Link to='/#'>Logout</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
