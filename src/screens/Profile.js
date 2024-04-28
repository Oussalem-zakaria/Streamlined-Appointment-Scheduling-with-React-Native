import { Icon } from "@rneui/base";
import React, { useContext, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { AuthContext } from "../context/AuthContext";
import { FontAwesome } from "@expo/vector-icons";
import { showToast } from "../components/AlertToast";


export default Profile = ({ navigation }) => {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    showToast(
      "info",
      "Bienvenue 👋",
      "Consultez votre profil et vos rendez-vous"
    );
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate("LandingPage")}>
          <Icon
            name="home"
            size={40}
            color={"#FFF"}
            style={{ marginRight: 15 }}
          />
        </TouchableOpacity>
      ),
    });
  }, []);
  return (
    // <AuthLayout title="Profile" showBackButton>
     
      <View
        className="flex flex-col space-y-5 py-10 px-4"
        style={{ backgroundColor: "#F4F4FB"}}
      >
        <View>
          <Text className="text-sky-900 font-bold text-center text-xl">
            Mon profil
          </Text>
        </View>
        <View className="flex items-center">
          <Image
            source={require("../../assets/images/user/user.png")}
            style={{ width: 100, height: 100, borderRadius: 100 }}
          />
        </View>
        <View className="px-3 py-10 space-y-4 bg-blue-100 shadow-md shadow-black rounded-lg">
          <View className="flex flex-row pb-3 space-x-6 items-center">
            <FontAwesome name="user-circle" size={25} color={"#444"} />
            <Text className="text-lg font-medium">{user.firstName} {user.lastName}</Text>
          </View>
          <View className="flex flex-row pb-3 space-x-6 items-center">
            <FontAwesome name="envelope" size={25} color={"#444"} />
            <Text className="text-lg font-medium">{user.username}</Text>
          </View>
          <View className="flex flex-row pb-3 space-x-6 items-center">
            <FontAwesome name="phone" size={30} color={"#444"} />
            <Text className="text-lg font-medium">{user.phoneNumber}</Text>
          </View>
        </View>
        <TouchableOpacity className="flex flex-row space-x-6 shadow-sm shadow-black bg-blue-200 py-3 px-3 rounded-lg items-center justify-center" onPress={() => navigation.navigate("Home")}>
          <FontAwesome name="eye" size={25} color={"#444"} />
          <Text className="text-lg font-medium ">Voir mes rendez-vous</Text>
        </TouchableOpacity>
      </View>
    // </AuthLayout>
  );
};

