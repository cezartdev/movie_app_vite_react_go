import {
	BookOpenText,
	Bookmark,
	Home,
	Settings,
} from 'lucide-react';

import { Link } from 'react-router';
import PopCornSvg from '../../assets/svg/popcorn.svg?react';
export default function SideBar() {
	return (
		<section className='h-screen overflow-y-auto w-20 lg:w-56 flex flex-col bg-base-100 transition-all duration-300'>
			<ul className='menu size-full gap-4'>
				<Link to='/' className='flex flex-col items-center'>
					<PopCornSvg className='w-10' />
					<h1 className='menu-title subtitle-1 text-center hidden lg:block'>
						Movies App
					</h1>
				</Link>
				<li>
					<Link to='/#'>
						<Home />
						<p className='hidden lg:block'>Home</p>
					</Link>
				</li>
				<li>
					<details>
						<summary>
							<BookOpenText />
							<p className='hidden lg:block'>Categories</p>
						</summary>
						<ul>
							<li>
								<Link to='/#'>Submenu 1</Link>
							</li>
							<li>
								<Link to='/#'>Submenu 2</Link>
							</li>
							<li>
								<details>
									<summary>Parent</summary>
									<ul>
										<li>
											<Link to='/#'>Submenu 1</Link>
										</li>
										<li>
											<Link to='/#'>Submenu 2</Link>
										</li>
									</ul>
								</details>
							</li>
						</ul>
					</details>
				</li>
				<li>
					<Link to='/#'>
						<Bookmark />
						<p className='hidden lg:block'>Saved</p>
					</Link>
				</li>
			</ul>
			<ul className='menu w-full'>
				<li>
					<Link to='/#'>
						<Settings />
						<p className='hidden lg:block'>Settings</p>
					</Link>
				</li>
			</ul>
		</section>
	);
}
