import {
	BookOpenText,
	Bookmark,
	Home,
	Settings,
} from 'lucide-react';

import { Link } from 'react-router';

export default function SideBar() {
	return (
		<section className='h-screen overflow-y-auto w-56 flex flex-col bg-base-100'>
			<ul className='menu size-full'>
				<Link to='/'>
					<h2 className='menu-title subtitle-1 text-center'>
						Movies App
					</h2>
				</Link>
				<li>
					<Link to='/#'>
						<Home />
						<p>Home</p>
					</Link>
				</li>
				<li>
					<details>
						<summary>
							<BookOpenText />
							<p>Categories</p>
						</summary>
						<ul>
							<li>
								<Link to='/#'>Submenu 1</Link>
							</li>
							<li>
								<Link to='/#'>Submenu 2</Link>
							</li>
							<li>
								<details open>
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
						<p>Saved</p>
					</Link>
				</li>
			</ul>
			<ul className='menu w-full'>
				<li>
					<Link to='/#'>
						<Settings />
						<p>Settings</p>
					</Link>
				</li>
			</ul>
		</section>
	);
}
