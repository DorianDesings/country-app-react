import { useNavigate, useParams } from 'react-router-dom';
import { v4 } from 'uuid';
import { useFetch } from '../../hooks/useFetch';
import { searchCountryFullName } from '../../utils/format-countries';

const CountryDetailsByName = () => {
	const { name } = useParams();
	const navigate = useNavigate();
	const { data } = useFetch(searchCountryFullName(name));

	console.log(data);
	if (data.length === 0) return <h1>Loading ...</h1>;
	return (
		<>
			<h1>{data[0].name.common}</h1>
			{data[0].borders &&
				data[0].borders.map(border => (
					<p key={v4()} onClick={() => navigate(`/country/code/${border}`)}>
						{border}
					</p>
				))}
		</>
	);
};

export default CountryDetailsByName;
