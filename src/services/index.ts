import axios, { AxiosResponse } from "axios";

const base = "http://akumi.me/api/";

export const Post = async (
  url: string,
  body: object
): Promise<AxiosResponse> => {
  return await axios.post(url, body, {
    withCredentials: true,
    baseURL: base,
  });
};

export const Get = async (url: string): Promise<AxiosResponse> => {
  return await axios.get(url, {
    withCredentials: true,
    baseURL: base,
  });
};

export const Put = async (
  url: string,
  body: object
): Promise<AxiosResponse> => {
  return await axios.put(url, body, {
    withCredentials: true,
    baseURL: base,
  });
};

export const Delete = async (url: string): Promise<AxiosResponse> => {
  return await axios.delete(url, {
    withCredentials: true,
    baseURL: base,
  });
};
