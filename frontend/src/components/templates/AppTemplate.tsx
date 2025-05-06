import SideBar from '../organisms/SideBar';
import NavBar from '../organisms/NavBar';
import { Outlet } from 'react-router';

export function AppTemplate() {
	return (
		<>
			<div className='flex h-screen'>
				<SideBar />
				<section className='flex flex-col flex-1 overflow-hidden'>
					<NavBar />

					<div className='overflow-y-auto'>
						<Outlet />
					</div>
				</section>
			</div>
		</>
	);
}
