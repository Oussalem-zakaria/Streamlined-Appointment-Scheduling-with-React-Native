import axios from "axios";
import { BASE_URL } from "../config";

export const resetPassword = async (email) => {
  if (email === "") {
    return false;
  }
  console.log("url:", BASE_URL + "/auth/forgot-password?email=" + email);
  // const response = axios.post(BASE_URL + "/auth/forgot-password?email=" + email);
  try {
    const response = await axios.post(
      `${BASE_URL}/auth/forgot-password?email=${email}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.data) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};
