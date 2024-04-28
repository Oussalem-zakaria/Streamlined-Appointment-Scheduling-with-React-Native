import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { LoginStyles } from "../../styles/auth/LoginStyles";
import { Box, Card, CardMedia, Chip, Typography } from "@mui/material";
import { ImageBackground, ScrollView, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import { Icon } from "@rneui/base";
import { showToast } from "../components/AlertToast";

const LandingPage = ({ navigation }) => {
    useEffect(() => {
      showToast(
        "info",
        "Bienvenue 👋",
        "Consultez vos rendez-vous et prenez un nouveau rendez-vous"
      );
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                    <Icon name="account-circle" size={40} color={"#FFF"} style={{marginRight: 15}} />
                </TouchableOpacity>
            ),
        });
    }  , []);

  return (
    <>
      <ImageBackground
        source={require("../../assets/images/bloodDon3.jpeg")}
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
        className="bg-center bg-cover items-center"
      >
        <Text className="text-center text-xl font-bold bg-slate-100 opacity-90 text-stone-900 px-4 py-2 mx-2 rounded-full">
        Ensemble, sauvons des vies ! ❤️
        </Text>
      </ImageBackground>
      <View
        className="flex flex-col space-y-10 py-20 px-10"
        style={{ backgroundColor: "#F4F4FB" }}
      >
        <View>
          <Text className="text-sky-900 font-bold text-center text-xl">
            Prendre un rendez-vous
          </Text>
          <Text className=" text-sky-900 font-light text-center text-sm">
            Consulter vos rendez-vous
          </Text>
        </View>
        <TouchableOpacity
          className=" py-2 px-2 rounded-full shadow-sm shadow-black"
          onPress={() => navigation.navigate("Home")}
          style={{ backgroundColor: "#39AFEA" }}
        >
          <Text className="text-white font-bold text-center text-xl">
          Sauvez des vies
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = LoginStyles;

export default LandingPage;
