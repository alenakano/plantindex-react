import axios from 'axios';

const url = process.env.REACT_APP_DOMAIN || 'http://google.com';

export const api = axios.create({
	baseURL: url
});

export const search = async(pathParam, queryParams, setData) => {
  const finalUrl = new URL(url);
  finalUrl.pathname = pathParam;
  for (var [key, value] of Object.entries(queryParams)) {
    if(value) finalUrl.searchParams.append(key, value);
  }
  const response = await api.get(finalUrl);
  setData(response.data);
}