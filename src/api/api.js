import axios from 'axios';

const baseURL = process.env.REACT_APP_DOMAIN || 'http://google.com';

export const api = axios.create({
	baseURL: baseURL
});

export const search = async(param, setData) => {
	const reqUrl = baseURL + param;
	console.log('URI', reqUrl);
	const response = await api.get(reqUrl);
	setData(response.data);
}