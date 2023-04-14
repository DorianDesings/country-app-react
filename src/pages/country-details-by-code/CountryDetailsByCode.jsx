import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CountryDetails from '../../components/country-details/CountryDetails';
import { COUNTRIES } from '../../constants/urls';
import { useFetch } from '../../hooks/useFetch';

const CountryDetailsByCode = () => {
	const [countryData, setCountryData] = useState([]);
	const { code } = useParams();
	const { data, setUrlToFetch } = useFetch(`${COUNTRIES.CODE}${code}`);

	useEffect(() => {
		setCountryData(data);
		setUrlToFetch(`${COUNTRIES.CODE}${code}`);
	}, [data, code]);

	if (countryData.length === 0) return <h1>Loading ...</h1>;

	return <CountryDetails country={countryData[0]} />;
};

export default CountryDetailsByCode;
