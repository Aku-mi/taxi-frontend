import axios, { AxiosResponse } from "axios";
import { storage } from "./storage";

const base = "https://akumi.me/api/";

export const Post = async (
  url: string,
  body: object
): Promise<AxiosResponse> => {
  return await axios.post(url, body, {
    withCredentials: true,
    baseURL: base,
    headers: {
      Authorization: `bearer ${storage.token()}`,
    },
  });
};

export const Get = async (url: string): Promise<AxiosResponse> => {
  return await axios.get(url, {
    withCredentials: true,
    baseURL: base,
    headers: {
      Authorization: `bearer ${storage.token()}`,
    },
  });
};
