import { AuthContext } from "../context/AuthContext";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./AppNavigator";
import { ActivityIndicator, View } from "react-native";
import AuthStack from "./AuthStack";
import { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import AddRdv from "../screens/AddRdv";
import Profile from "../screens/Profile";
import Toast from "react-native-toast-message";

const Stack = createNativeStackNavigator();

export const AppNav = () => {
  const { isLoading, userToken } = useContext(AuthContext);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {!userToken ? <AuthStack /> : <AppNavigator />}
      <Toast />
    </NavigationContainer>
  );
};
