import { COUNTRIES } from '../constants/urls';

export const searchCountryFullName = name => {
	return `${COUNTRIES.NAME}${name}?fullText=true`;
};
