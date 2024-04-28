import axios from "axios";
import { BASE_URL } from "../config";

export const getAvailableSlots = async (token, centreId, date) => {
  const creneauxRes = await axios.get(
    `${BASE_URL}/centres/${centreId}/creneaux-disponibles?jourSpecifique=${date}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return creneauxRes.data;
};
