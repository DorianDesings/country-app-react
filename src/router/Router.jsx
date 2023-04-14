import { Route, Routes } from 'react-router-dom';
import CountryDetailsByCode from '../pages/country-details-by-code/CountryDetailsByCode';
import CountryDetailsByName from '../pages/country-details-by-name/CountryDetailsByName';
import Home from '../pages/home/Home';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/country/name/:name' element={<CountryDetailsByName />} />
			<Route path='/country/code/:code' element={<CountryDetailsByCode />} />
		</Routes>
	);
};

export default Router;
