import { Outlet } from 'react-router';
import Footer from '../organisms/Footer';
import NavBar from '../organisms/NavBar';
import SideBar from '../organisms/SideBar';
export function AppTemplate() {
	return (
		<>
			<div className='flex h-screen'>
				<SideBar />
				<section className='flex flex-col flex-1 overflow-hidden'>
					<NavBar />

					<div className='overflow-y-auto'>
						<Outlet />
						<Footer />
					</div>
				</section>
			</div>
		</>
	);
}
