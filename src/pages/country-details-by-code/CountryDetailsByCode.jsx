import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CountryDetails from '../../components/country-details/CountryDetails';
import { COUNTRIES } from '../../constants/urls';

const CountryDetailsByCode = () => {
	const [countryData, setCountryData] = useState([]);
	const { code } = useParams();

	useEffect(() => {
		getCountryData(code, setCountryData);
	}, [code]);

	if (countryData.length === 0) return <h1>Loading ...</h1>;

	return <CountryDetails country={countryData[0]} />;
};

const getCountryData = async (code, setData) => {
	const request = await fetch(`${COUNTRIES.CODE}${code}`);
	const data = await request.json();
	setData(data);
};

export default CountryDetailsByCode;
