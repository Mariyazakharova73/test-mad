import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { routes } from './types/routes';

function App() {
	return (
		<div className='page'>
			<Header />
			<main className='content'>
				<Routes>
					{routes.map((route, index) => (
						<Route
							key={index}
							path={route.path}
							element={<route.component />}
						/>
					))}
				</Routes>
			</main>
			<Footer />
		</div>
	);
}

export default App;
