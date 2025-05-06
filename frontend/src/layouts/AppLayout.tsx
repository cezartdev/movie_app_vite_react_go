import {
	BookOpenText,
	Bookmark,
	Home,
	Settings,
} from 'lucide-react';
import { Outlet } from 'react-router';

export function AppLayout() {
	return (
		<>
			<div className='flex h-screen'>
				{/* Sidebar */}
				<section className='h-screen overflow-y-auto w-56 flex flex-col bg-base-200'>
					<ul className='menu size-full'>
						<a href='/'>
							<h2 className='menu-title subtitle-1 text-center'>
								My app
							</h2>
						</a>
						<li>
							<a href='/#'>
								<Home />
								<p>Home</p>
							</a>
						</li>
						<li>
							<details>
								<summary>
									<BookOpenText />
									<p>Categories</p>
								</summary>
								<ul>
									<li>
										<a href='/#'>Submenu 1</a>
									</li>
									<li>
										<a href='/#'>Submenu 2</a>
									</li>
									<li>
										<details open>
											<summary>Parent</summary>
											<ul>
												<li>
													<a href='/#'>Submenu 1</a>
												</li>
												<li>
													<a href='/#'>Submenu 2</a>
												</li>
											</ul>
										</details>
									</li>
								</ul>
							</details>
						</li>
						<li>
							<a href='/#'>
								<Bookmark />
								<p>Saved</p>
							</a>
						</li>
					</ul>
					<ul className='menu w-full'>
						<li>
							<a href='/#'>
								<Settings />
								<p>Settings</p>
							</a>
						</li>
					</ul>
				</section>
				{/* Content */}
				<section className='flex flex-col flex-1 overflow-hidden'>
					{/* User NavBar */}
					<nav className='navbar bg-base-100 shadow-sm'>
						<div className='flex-1'>
							<p className='text-xl'>Title</p>
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
								<ul className='menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow'>
									<li>
										<a
											href='/#'
											className='justify-between'
										>
											Profile
											<span className='badge'>New</span>
										</a>
									</li>
									<li>
										<a href='/#'>Settings</a>
									</li>
									<li>
										<a href='/#'>Logout</a>
									</li>
								</ul>
							</div>
						</div>
					</nav>
					{/*Content */}
					<div className='overflow-y-auto'>
						<Outlet />
					</div>
				</section>
			</div>
		</>
	);
}
