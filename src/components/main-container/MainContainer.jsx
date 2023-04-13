import { useState } from 'react';
import { COUNTRIES } from '../../constants/urls';
import { useFetch } from '../../hooks/useFetch';
import Countries from '../countries/Countries';
import FilterRegion from '../filter-region/FilterRegion';
import Search from '../search/Search';

const MainContainer = () => {
	const [region, setRegion] = useState(0);
	const [search, setSearch] = useState('');
	const { setUrlToFetch, data, loading } = useFetch(COUNTRIES.ALL);
	console.log('DATA', data);
	return (
		<>
			<Search
				search={search}
				setSearch={setSearch}
				region={region}
				setUrlToFetch={setUrlToFetch}
			/>
			<FilterRegion
				region={region}
				setRegion={setRegion}
				setUrlToFetch={setUrlToFetch}
			/>
			{loading && <h1>LOADING...</h1>}
			{!loading && <Countries data={data} />}
		</>
	);
};

export default MainContainer;
