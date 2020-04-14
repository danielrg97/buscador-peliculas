import axios from 'axios';

const baseURL = "http://www.omdbapi.com/?apikey=26b67106";

export const apiCall = (url, data, headers, method) => axios({
    method, 
    url: baseURL + url, 
    data,
    headers
}) 