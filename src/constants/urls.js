import { REGIONS } from './region-filter';

const URL_BASE = 'https://restcountries.com/v3.1/';

export const COUNTRIES = {
	ALL: `${URL_BASE}/all`,
	AFRICA: `${URL_BASE}/region/${REGIONS.AFRICA}`,
	AMERICA: `${URL_BASE}/region/${REGIONS.AMERICA}`,
	ASIA: `${URL_BASE}/region/${REGIONS.ASIA}`,
	EUROPE: `${URL_BASE}/region/${REGIONS.EUROPE}`,
	OCEANIA: `${URL_BASE}/region/${REGIONS.OCEANIA}`,
	NAME: `${URL_BASE}name/`
};
