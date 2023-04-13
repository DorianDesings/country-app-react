import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/country/:name' element={<h1>Country details</h1>} />
		</Routes>
	);
};

export default Router;
