import axios from 'axios';

const url = process.env.REACT_APP_BASE_URL || 'https://apiplant.herokuapp.com';

export const api = axios.create({
	baseURL: url
});

export const search = async(pathParam, queryParams, setData) => {
  let response;
  const finalUrl = new URL(url);
  finalUrl.pathname = pathParam;
  for (var [key, value] of Object.entries(queryParams)) {
    if(value) finalUrl.searchParams.append(key, value);
  }

  response = await api.get(finalUrl).catch(e => {
    console.error('ERRO DE COMUNICAÇÃO => ', e);
  });
  
  if(!response || !response.data || response.status < 200 || response.status >= 300) {
    setData(Object.assign([], { error: true }));
    return;
  }
  setData(Object.assign(response.data, { success: true }));
}