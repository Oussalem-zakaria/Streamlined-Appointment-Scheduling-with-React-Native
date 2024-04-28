import axios from "axios";
import { BASE_URL } from "../config";
import {
  validateEmail,
  validateForm,
  validatePassword,
  validatePhoneNumber,
} from "./formValidation";

export const registerAuth = async (userData) => {
  try {
    console.log(userData);

    if (!validateForm(userData)) {
      return {
        status: false,
        message: "Veuillez remplir tous les champs",
      };
    }
    if (!validateEmail(userData.username)) {
      return {
        status: false,
        message: "Email invalide entré un email valide",
      };
    }
    if (!validatePhoneNumber(userData.phoneNumber)) {
      return {
        status: false,
        message: "Numéro de téléphone invalide (10 chiffres)",
      };
    }
    if (!validatePassword(userData.password)) {
      return {
        status: false,
        message:
          "Le mot de passe doit contenir au moins 8 caractères, une lettre majuscule et un chiffre",
      };
    }
    const response = await axios.post(`${BASE_URL}/auth/register`, userData);

    if (response.data) {
      return {
        status: true,
        message: "Compte créé avec succès",
      };
    }
  } catch (error) {
    return {
      status: false,
      message: "Erreur lors de la création du compte",
    };
  }
};
