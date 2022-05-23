import axios from "axios";
let api = `${process.env.REACT_APP_API_URL}/`;

export const getData = async (path) => {
  const response = await axios.get(`${api}/${path}`);
  return response.data;
};

export const showData = async (path) => {
  const response = await axios.get(`${api}/${path}`);
  return response.data;
};

export const postData = async (path, data) => {
  const response = await axios.post(`${api}/${path}`, data);
  return response.data;
};

export const putData = async (path, data) => {
  const response = await axios.put(`${api}/${path}`, data);
  return response.data;
};

export const deleteData = async (path) => {
  const response = await axios.delete(`${api}/${path}`);
  return response.data;
};
