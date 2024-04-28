import axios from "axios";
import { BASE_URL } from "../config";
import { validateEmail, validatePassword } from "./formValidation";

export const loginAuth = async (userData, loginContext) => {
  try {
    console.log(userData);

    if (!validateEmail(userData.username)) {
      return {
        status: false,
        message: "Email invalide entré un email valide",
      };
    }
    if (!validatePassword(userData.password)) {
      return {
        status: false,
        message:
          "Le mot de passe doit contenir au moins 8 caractères, une lettre majuscule et un chiffre",
      };
    }
    const response = await axios.post(`${BASE_URL}/auth/login`, userData);

    if ((response.data.jwt !== "", response.data.user !== null)) {
      loginContext(response.data.jwt, response.data.user);
    } else {
      return {
        status: false,
        message: "Erreur lors de la connexion",
      };
    }
    return {
      status: true,
      message: "Connexion réussie",
    };
  } catch (error) {
    return {
      status: false,
      message: "Erreur lors de la connexion",
    };
  }
};
