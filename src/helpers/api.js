import axios from 'axios';

const request = async (multPart, method, url, data) => {
  const token = JSON.parse(localStorage.getItem('token'));
  const user = JSON.parse(localStorage.getItem('user'));
  return await axios({
    url,
    headers: {
      'Content-Type': multPart
        ? 'multipart/form-data; '
        : 'application/json; ' + 'charset=utf-8',
      authorization: token ? `Bearer ${token}` : '',
      orgid: user ? user.orgId : '',
    },
    method: method,
    data,
  });
};

const unAuthRequest = async (method, url, data) => {
  return await axios({
    url,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    method: method,
    data,
  });
};

export const getRequest = (url) => request(false, 'GET', url);
export const postRequest = (url, data) => request(false, 'POST', url, data);
export const putRequest = (url, data) => request(false, 'PUT', url, data);
export const deleteRequest = (url) => request(false, 'DELETE', url);
export const getRequestFormData = (url) => request(true, 'GET', url);
export const postRequestFormData = (url, data) => request(true, 'POST', url, data);
export const putRequestFormData = (url, data) => request(true, 'PUT', url, data);
export const deleteRequestFormData = (url) => request(true, 'DELETE', url);
export const postUnauthRequest = (url, data) => unAuthRequest('POST', url, data);
export const getUnauthRequest = (url, data) => unAuthRequest('GET', url, data);
