import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { searchCountryFullName } from '../../utils/format-countries';
import { useEffect, useState } from 'react';
import CountryDetails from '../../components/country-details/CountryDetails';
import { COUNTRIES } from '../../constants/urls';

const CountryDetailsByName = () => {
	const [countryData, setCountryData] = useState([]);
	const { name } = useParams();
	console.log(name);
	const { data, setUrlToFetch } = useFetch(searchCountryFullName(name));

	useEffect(() => {
		setCountryData(data);
		setUrlToFetch(`${COUNTRIES.NAME}${name}`);
	}, [data]);

	if (data.length === 0) return <h1>Loading ...</h1>;
	return <CountryDetails country={countryData[0]} />;
};

export default CountryDetailsByName;
