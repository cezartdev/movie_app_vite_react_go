import { BrowserRouter, Route, Routes } from 'react-router';
import { Home } from './components/pages/Home';
import { AppLayout } from './layouts/AppLayout';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<AppLayout />}>
					<Route index element={<Home />} />
				</Route>
				<Route path='/about' element={<h1>About</h1>} />
				<Route path='/contact' element={<h1>Contact</h1>} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
