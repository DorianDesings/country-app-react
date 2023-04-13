import { v4 } from 'uuid';

const Countries = ({ data }) => {
	return data.map(country => <h1 key={v4()}>{country.name.common}</h1>);
};

export default Countries;
