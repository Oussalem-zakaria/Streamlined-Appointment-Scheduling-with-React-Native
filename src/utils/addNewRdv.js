import axios from "axios";
import { BASE_URL } from "../config";

export const addNewRdv = async (rdvData, token) => {
  try {
    console.log("rdvData:", rdvData);

    if (
      rdvData.date === "" ||
      rdvData.creneauId === "" ||
      rdvData.centerId === "" ||
      rdvData.jour === ""
    ) {
      return {
        status: false,
        message: "Veuillez remplir tous les champs",
      };
    }

    const response = await axios.post(`${BASE_URL}/rdvs`, rdvData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("response:", response);

    if (response.data) {
      return {
        status: true,
        message: "Rendez-vous créé",
        data: response.data,
      };
    } else {
      return {
        status: false,
        message: "Erreur lors de la création du rendez-vous",
      };
    }
  } catch (error) {
    return {
      status: false,
      message: "Erreur lors de la création du rendez-vous",
    };
  }
};
