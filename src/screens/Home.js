import React, { useContext, useEffect } from "react";
import { connect } from "react-redux";
import { ScrollView } from "react-native-gesture-handler";
import { Icon } from "@rneui/base";
import CardRdv from "../components/CardRdv";
import { BASE_URL } from "../config";
import { LoginStyles } from "../../styles/auth/LoginStyles";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { showToast } from "../components/AlertToast";
import { useSelector, useDispatch } from "react-redux";
import { getRdv } from "../redux/features/rdvs/rdvSlice";

const Home = ({ navigation }) => {
  const { userToken, user } = useContext(AuthContext);
  const dispatch = useDispatch();
  const rdvs = useSelector((state) => state.rdvs.data);
  console.log("rdvs:", rdvs);

  useEffect(() => {
    showToast(
      "info",
      "Bienvenue 👋",
      "Consultez vos rendez-vous et prenez un nouveau rendez-vous"
    );
    const fetchData = async () => {
      try {
        console.log("user:", user);
        const response = await axios.get(`${BASE_URL}/rdvs/${user.userId}`, {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        });
        console.log("response:", response.data);
        dispatch(getRdv(response.data));
      } catch (error) {
        console.error("Error fetching rdvs:", error);
      }
    };
    console.log(rdvs);
    fetchData();
  }, [dispatch]);

  return (
    <ImageBackground
      source={require("../../assets/images/bloodDon3.jpeg")}
      style={styles.backgroundImage}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <View className="py-10 px-5">
          <View className="flex flex-row justify-between pb-5">
            <Text className="text-xl font-bold">Mes rendez-vous</Text>
          </View>
          <TouchableOpacity
            className="py-2 px-6 rounded-full flex flex-row justify-between mb-5 shadow-sm shadow-black"
            style={{ backgroundColor: "#39AFEA" }}
            onPress={() => navigation.navigate("AddRdv")}
          >
            <Text className="text-xl text-white font-bold">
              Prendre un rendez-vous
            </Text>
            <Icon name="add" color={"#FFF"} size={30} />
          </TouchableOpacity>
          <View style={{ display: "flex", flexDirection: "column", gap: 15 }}>
            {rdvs &&
              rdvs.map((rdv, index) => <CardRdv key={index} rdv={rdv} />)}
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = LoginStyles;

export default Home;
