import { useEffect } from 'react';
import { COUNTRIES } from '../../constants/urls';

const Search = ({ setUrlToFetch, search, setSearch, region }) => {
	useEffect(() => {
		if (Number(region) === 0 && !search) setUrlToFetch(COUNTRIES.ALL);
		else if (!search) setUrlToFetch(COUNTRIES[region.toUpperCase()]);
		else setUrlToFetch(`${COUNTRIES.NAME}${search}`);
	}, [search]);

	return <input type='text' onChange={e => setSearch(e.target.value)} />;
};

export default Search;
