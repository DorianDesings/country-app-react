import { useEffect, useState } from 'react';

export const useFetch = url => {
	const [urlToFetch, setUrlToFetch] = useState(url);
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		fethData(urlToFetch, setData, setLoading);
	}, [urlToFetch]);

	return { setUrlToFetch, data, loading };
};

const fethData = async (urlToFetch, setData, setLoading) => {
	const request = await fetch(urlToFetch);
	const data = await request.json();
	setData(data);
	setLoading(false);
};
