import axios from 'axios';

export const postAPI = async (url: string, post: object, token?: string) => {
  const res = await axios.post(`/api/${url}`, post, {});

  return res;
};

export const getAPI = async (url: string, token?: string) => {
  const res = await axios.get(`/api/${url}`, {});
  return res;
};

export const putAPI = async (url: string, post: object, token?: string) => {
  const res = await axios.put(`/api/${url}`, post, {});

  return res;
};

export const deleteAPI = async (url: string, token?: string) => {
  const res = await axios.delete(`/api/${url}`, {});

  return res;
};
