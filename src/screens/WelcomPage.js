import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { LoginStyles } from "../../styles/auth/LoginStyles";
import { Box, Card, CardMedia, Chip, Typography } from "@mui/material";
import { ImageBackground, ScrollView, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import { Icon } from "@rneui/base";
import { showToast } from "../components/AlertToast";
import { SliderBox } from "react-native-image-slider-box";

const WelcomPage = ({ navigation }) => {
  useEffect(() => {
    showToast(
      "info",
      "Bienvenue 👋",
      "Consultez vos rendez-vous et prenez un nouveau rendez-vous"
    );
  }, []);

  const [images] = useState([
    require("../../assets/images/bloodDon2.jpeg"),
    require("../../assets/images/bloodDon3.jpeg"),
    require("../../assets/images/bloodDon4.jpeg"),
  ]);

  return (
    <>
      <SliderBox
        images={images}
        autoplay
        circleLoop
        dotColor="#FFF"
        inactiveDotColor="#90A4AE"
        paginationBoxVerticalPadding={20}
        resizeMethod={"resize"}
        resizeMode={"cover"}
        sliderBoxHeight={400}
      />
      <View
        className="flex flex-col space-y-10 py-20 px-10"
        style={{ backgroundColor: "#F4F4FB" }}
      >
        <View>
          <Text className="text-sky-900 font-bold text-center text-xl">
            Vous êtes nouveau ?
          </Text>
          <Text className=" text-sky-900 font-light text-center text-sm">
            Connectez-vous ou créez un compte
          </Text>
        </View>
        <TouchableOpacity
          className=" py-2 px-2 rounded-full shadow-sm shadow-black"
          onPress={() => navigation.navigate("Login")}
          style={{ backgroundColor: "#39AFEA" }}
        >
          <Text className="text-white font-bold text-center text-xl">
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className=" py-2 px-2 rounded-full shadow-sm shadow-black"
          onPress={() => navigation.navigate("Singup")}
          style={{
            backgroundColor: "#FFF",
            borderColor: "#39AFEA",
            borderWidth: 1,
            marginTop: 10,
          }}
        >
          <Text className=" text-sky-700 font-bold text-center text-xl">
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = LoginStyles;

export default WelcomPage;
