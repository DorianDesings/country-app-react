import { useEffect, useState } from 'react';

export const useFetch = url => {
	const [urlToFetch, setUrlToFetch] = useState(url);
	const [data, setData] = useState([]);

	useEffect(() => {
		fethData(urlToFetch, setData);
	}, [urlToFetch]);

	return { setUrlToFetch, data };
};

const fethData = async (urlToFetch, setData) => {
	const request = await fetch(urlToFetch);
	const data = await request.json();
	setData(data);
};
