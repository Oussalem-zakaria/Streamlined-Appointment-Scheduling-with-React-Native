import React, { useEffect, useState } from "react";
import { Image, ImageBackground, ScrollView, View } from "react-native";
import { Button, Icon, Input } from "@rneui/themed";
import { Text } from "react-native";
import { resetPasswordStyle } from "../../styles/auth/resetPasswordStyle";
import { showToast } from "../components/AlertToast";
import axios from "axios";
import { BASE_URL } from "../config";
import { resetPassword } from "../utils/resetPassword";

const ResetPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");

  const handleResetPassword = async () => {
    const response = await resetPassword(email);

    if (response) {
      showToast(
        "success",
        "Réinitialisation du mot de passe",
        "Consultez votre boîte de réception pour réinitialiser votre mot de passe"
      );
      navigation.navigate("Login");
    }
    else {
      showToast("error", "Erreur", "Veuillez réessayer");
    }    
  };

  useEffect(() => {
    showToast(
      "info",
      "Réinitialisation du mot de passe",
      "Entrez votre adresse e-mail pour réinitialiser votre mot de passe"
    );
  }, []);

  return (
    <ImageBackground
      source={require("../../assets/images/bloodDon3.jpeg")}
      style={styles.backgroundImage}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <View style={{ flex: 1, justifyContent: "center" }}>
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
          <Text style={styles.title1}>
            Entrez votre adresse e-mail pour réinitialiser votre mot de passe
          </Text>
          <Input
            value={email}
            inputStyle={{
              paddingVertical: 10,
              backgroundColor: "#fff",
              paddingHorizontal: 10,
              marginTop: 5,
            }}
            onChangeText={(text) => setEmail(text.trim())}
            label="Email"
            labelStyle={{ color: "rgb(52, 73, 94)" }}
            placeholder="Adresse e-mail"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Button
            title="Réinitialiser le mot de passe"
            onPress={handleResetPassword}
            buttonStyle={{
              marginVertical: 10,
              marginHorizontal: 10,
              borderRadius: 10,
            }}
            titleStyle={{ fontSize: 17, color: "white", fontWeight: "bold" }}
            color="primary"
            size="lg"
          />
          <View className="flex flex-col space-y-3 items-center">
            <Text
              style={{
                color: "rgb(52, 73, 94)",
                textAlign: "center",
                marginTop: 10,
              }}
            >
              Vous souvenez-vous de votre mot de passe ?{" "}
            </Text>
            <Text
              className="text-slate-800 font-bold"
              onPress={() => navigation.navigate("Login")}
            >
              Connectez-vous
            </Text>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = resetPasswordStyle;

export default ResetPasswordScreen;
