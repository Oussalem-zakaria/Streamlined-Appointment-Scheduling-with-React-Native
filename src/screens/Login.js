import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
import { Button, Icon, Input } from "@rneui/themed";

import { LoginStyles } from "../../styles/auth/LoginStyles";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { BASE_URL } from "../config";
import { showToast } from "../components/AlertToast";
import { loginAuth } from "../utils/loginauth";

const styles = LoginStyles;

const Login = ({ navigation }) => {
  const [username, setuserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { login } = useContext(AuthContext);

  useEffect(() => {
    showToast("info", "Bienvenue 👋", "Connectez-vous à votre compte");
  }, []);

  const handleLogin = async () => {
    try {
      const userData = {
        username: username,
        password: password,
      };

      const response = await loginAuth(userData, login);
      console.log(response);
      if (response.status) {
        showToast("success", "Connexion réussie", response.message);
        navigation.navigate("Home");
      }
      else {
        showToast("error", "Erreur de connexion", response.message);
      }
    } catch (error) {
      showToast("error", "Erreur de connexion", "Veuillez réessayer");
    }
  };

  return (
    <ImageBackground
      source={require("../../assets/images/bloodDon3.jpeg")}
      style={styles.backgroundImage}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <Image
            source={require("../../assets/images/logo.png")}
            style={styles.img}
          />
        </View>
        <Text style={styles.title1}>Connectez-vous à votre compte</Text>
        <Input
          value={username}
          inputStyle={{
            paddingVertical: 10,
            backgroundColor: "#fff",
            paddingHorizontal: 10,
            marginTop: 5,
          }}
          onChangeText={(text) => setuserName(text.trim())}
          label="Email"
          labelStyle={{ color: "rgb(52, 73, 94)" }}
          placeholder="Entrer votre email"
        />
        <Input
          secureTextEntry={!passwordVisible}
          value={password}
          inputStyle={{
            paddingVertical: 10,
            backgroundColor: "#fff",
            paddingHorizontal: 10,
            marginTop: 5,
            flex: 1,
          }}
          onChangeText={(text) => setPassword(text.trim())}
          label="Password"
          labelStyle={{ color: "rgb(52, 73, 94)" }}
          placeholder="Entrer votre mot de passe"
          accessoryRight={() => (
            <Icon
              name={passwordVisible ? "home" : "home"}
              onPress={() => setPasswordVisible(!passwordVisible)}
              color={"black"}
            />
          )}
        />

        <Button
          title="Sign In"
          onPress={handleLogin}
          buttonStyle={{
            marginVertical: 10,
            marginHorizontal: 10,
            borderRadius: 10,
          }}
          titleStyle={{ fontSize: 17, color: "white", fontWeight: "bold" }}
          color="primary"
          size="lg"
        />

        <View
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            paddingVertical: 15,
            marginHorizontal: 10,
          }}
        >
          <Text>Vous n'avez pas de compte ?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Singup")}>
            <Text style={styles.text}>s'inscrire</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            paddingVertical: 10,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("ResetPassword")}
          >
            <Text style={styles.text}>Mot de passe oublié ?</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Login;
