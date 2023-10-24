import axios from "axios";

axios.interceptors.request.use(
  function (config) {
    return config;
  },
  function (err) {
    return Promise.reject(err);
  }
);

export const getRequest = async (url: string, authToken: string) => {
  let config: any = null;
  if (authToken) {
    config = {
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      },
    };
  } else {
    config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
  }
  config.responseType = "json";
  let response;
  try {
    response = await axios.get(url, config);
    return response;
  } catch (err) {
    if (axios.isAxiosError(err) && err.response) {
      return err.response;
    }
  }
};

export const postRequest = async (url: string, data: any, authToken?: string, isFile?: boolean) => {
  let formData: any = {};
  let contentType = null;

  if (isFile) {
    formData = new FormData();
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });
    contentType = "multipart/form-data";
  } else {
    formData = data;
    contentType = "application/json";
  }
  let config: any = {};

  if (authToken) {
    config = {
      headers: { Authorization: `Bearer ${authToken}`, "Content-Type": contentType },
    };
  }
  config.withCredentials = true;

  let response;
  try {
    response = await axios.post(url, data, config);
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err) && err.response) {
      return err.response.data;
    }
  }
};
