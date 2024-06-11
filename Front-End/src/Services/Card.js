import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getApi = async () => {
  const resData = await axios.get(`${BASE_URL}`);
  return resData;
};
