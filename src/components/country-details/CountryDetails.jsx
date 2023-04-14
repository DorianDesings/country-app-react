import { useNavigate } from 'react-router-dom';
import { v4 } from 'uuid';

const CountryDetails = ({ country }) => {
	console.log(country);
	const navigate = useNavigate();
	if (!country) return <h1>Loading...</h1>;
	return (
		<>
			<h1>{country.name.common}</h1>
			{country.borders &&
				country.borders.map(border => (
					<p key={v4()} onClick={() => navigate(`/country/code/${border}`)}>
						{border}
					</p>
				))}
		</>
	);
};

export default CountryDetails;
