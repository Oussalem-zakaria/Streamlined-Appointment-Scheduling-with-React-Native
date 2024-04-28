import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import ResetPasswordScreen from "../screens/ResetPasswordScreen";
import Home from "../screens/Home";
import WelcomPage from "../screens/WelcomPage";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome"  screenOptions={{ headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Singup" component={Signup} />
      <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Welcome" component={WelcomPage} />
    </Stack.Navigator>
  );
};

export default AuthStack;
