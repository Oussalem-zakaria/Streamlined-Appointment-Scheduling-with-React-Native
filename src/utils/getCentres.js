import axios from "axios";
import { BASE_URL } from "../config";

export const getCentres = async (token) => {
  const centerRes = await axios.get(`${BASE_URL}/centres`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return centerRes.data;
};
