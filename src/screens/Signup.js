import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { Button, Input } from "@rneui/themed";
import { ImageBackground } from "react-native";
import { LoginStyles } from "../../styles/auth/LoginStyles";
import { showToast } from "../components/AlertToast";
import { registerAuth } from "../utils/registerAuth";

const Signup = ({ navigation }) => {
  const [username, setusername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    showToast(
      "info",
      "Bienvenue 👋",
      "Créez votre compte pour accéder à votre espace personnel"
    );
  }, []);

  const handleSignUp = async () => {
    const userData = {
      username: username,
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      password: password,
    };

    const response = await registerAuth(userData);
    console.log("Resp:", response);

    if (response.status) {
      showToast("success", "Compte créé", response.message);
      navigation.navigate("Login");
    } else {
      showToast("error", "Erreur de création", response.message);
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
        <Text style={styles.title1}>Créez votre compte dès maintenant !</Text>
        <Input
          value={username}
          inputStyle={{
            paddingVertical: 10,
            backgroundColor: "#fff",
            paddingHorizontal: 10,
            marginTop: 5,
          }}
          onChangeText={(text) => setusername(text.trim())}
          label="Email"
          labelStyle={{ color: "rgb(52, 73, 94)" }}
          placeholder="Entrer votre email"
        />

        <Input
          value={firstName}
          inputStyle={{
            paddingVertical: 10,
            backgroundColor: "#fff",
            paddingHorizontal: 10,
            marginTop: 5,
          }}
          onChangeText={(text) => setFirstName(text.trim())}
          label="Prénom"
          labelStyle={{ color: "rgb(52, 73, 94)" }}
          placeholder="Entrer votre prénom"
        />

        <Input
          value={lastName}
          inputStyle={{
            paddingVertical: 10,
            backgroundColor: "#fff",
            paddingHorizontal: 10,
            marginTop: 5,
          }}
          onChangeText={(text) => setLastName(text.trim())}
          label="Nom"
          labelStyle={{ color: "rgb(52, 73, 94)" }}
          placeholder="Entrer votre nom"
        />

        <Input
          value={phoneNumber}
          inputStyle={{
            paddingVertical: 10,
            backgroundColor: "#fff",
            paddingHorizontal: 10,
            marginTop: 5,
          }}
          onChangeText={(text) => setPhoneNumber(text.trim())}
          label="Téléphone"
          labelStyle={{ color: "rgb(52, 73, 94)" }}
          placeholder="Entrer votre numéro de téléphone"
        />

        <Input
          secureTextEntry={true}
          value={password}
          inputStyle={{
            paddingVertical: 10,
            backgroundColor: "#fff",
            paddingHorizontal: 10,
            marginTop: 5,
          }}
          onChangeText={(text) => setPassword(text.trim())}
          label="Password"
          labelStyle={{ color: "rgb(52, 73, 94)" }}
          placeholder="Entrer votre mot de passe"
        />

        <Button
          title="Sign Up"
          onPress={handleSignUp}
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
          <Text>Vous avez déjà un compte ?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.text}>Connectez-vous ici</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = LoginStyles;

export default Signup;
