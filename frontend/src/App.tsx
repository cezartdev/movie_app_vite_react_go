import { BrowserRouter, Route, Routes } from 'react-router';
import { HomePage } from './components/pages/HomePage';
import { AppTemplate } from './components/templates/AppTemplate';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<AppTemplate />}>
					<Route index element={<HomePage />} />
				</Route>
				<Route path='/about' element={<h1>About</h1>} />
				<Route path='/contact' element={<h1>Contact</h1>} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
