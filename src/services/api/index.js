import axios from 'axios';

export const apiURL =
  process.env.NODE_ENV === 'development'
    ? process.env.REACT_APP_API_URL_LOCAL
    : process.env.REACT_APP_API_URL;

const api = axios.create({
  baseURL: apiURL,
});

export function post(url, data = {}) {
  return api.post(url, data);
}

export function put(url, data = {}) {
  return api.put(url, data);
}

export function patch(url, data = {}) {
  return api.patch(url, data);
}

export function get(url) {
  return api.get(url);
}

export default {
  post,
  put,
  get,
  patch,
  axios,
};
