import axios from "axios";

export const getData = async (path) => {
    let url = `${process.env.REACT_APP_API_URL}/${path}`;
    const response = await axios.get(url);
    return response.data;
}

export const showData = async (path) => {
    let url = `${process.env.REACT_APP_API_URL}/${path}`;
    const response = await axios.get(url);
    return response.data;
}

export const postData = async (path, data) => {
    let url = `${process.env.REACT_APP_API_URL}/${path}`;
    const response = await axios.post(url, data);
    return response.data;
}

export const putData = async (path, data) => {
    let url = `${process.env.REACT_APP_API_URL}/${path}`;
    const response = await axios.put(url, data);
    return response.data;
}

export const deleteData = async (path) => {
    let url = `${process.env.REACT_APP_API_URL}/${path}`;
    const response = await axios.delete(url);
    return response.data;
}