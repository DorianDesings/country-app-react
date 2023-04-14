import { useNavigate } from 'react-router-dom';
import { v4 } from 'uuid';

const Countries = ({ data }) => {
	const navigate = useNavigate();
	return data.map(country => (
		<h1
			onClick={() => navigate(`/country/name/${country.name.common}`)}
			key={v4()}
		>
			{country.name.common}
		</h1>
	));
};

export default Countries;
