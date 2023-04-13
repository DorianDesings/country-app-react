import { useEffect } from 'react';
import { REGIONS } from '../../constants/region-filter';
import { COUNTRIES } from '../../constants/urls';

const FilterRegion = ({ setUrlToFetch, region, setRegion }) => {
	useEffect(() => {
		if (Number(region) === 0) setUrlToFetch(COUNTRIES.ALL);
		else setUrlToFetch(COUNTRIES[region.toUpperCase()]);
	}, [region]);

	return (
		<>
			<select value={region} onChange={e => setRegion(e.target.value)}>
				<option value={REGIONS.DEFAULT}>Filter by Region</option>
				<option value={REGIONS.AFRICA}>Africa</option>
				<option value={REGIONS.AMERICA}>America</option>
				<option value={REGIONS.ASIA}>Asia</option>
				<option value={REGIONS.EUROPE}>Europe</option>
				<option value={REGIONS.OCEANIA}>Oceania</option>
			</select>
		</>
	);
};

export default FilterRegion;
