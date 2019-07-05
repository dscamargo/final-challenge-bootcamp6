import axios from "axios";

import { getToken } from "../services/auth";

const api = axios.create({
  baseURL: "http://10.0.3.2:3333"
});

api.interceptors.request.use(async config => {
  const token = await getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
