import axios from "axios";

axios.interceptors.request.use(
  function (config) {
    return config;
  },
  function (err) {
    return Promise.reject(err);
  }
);

export const getRequest = async (url: string) => {
  let response;
  try {
    response = await axios.get(url);
    return response;
  } catch (err) {
    if (axios.isAxiosError(err) && err.response) {
      return err.response;
    }
  }
};

export const postRequest = async (url: string, data: {}) => {
  let response;
  try {
    response = await axios.post(url, data);
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err) && err.response) {
      return err.response.data;
    }
  }
};
