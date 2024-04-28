import "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
// import { useAuth } from "../context/AuthContext";
import Login from "../screens/Login";
import { Icon } from "@rneui/themed";
import Signup from "../screens/Signup";
import ResetPasswordScreen from "../screens/ResetPasswordScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/Home";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Logout from "../screens/Logout";
import Profile from "../screens/Profile";
import AddRdv from "../screens/AddRdv";
import LandingPage from "../screens/LandingPage";
import CustomDrawerContent from "./CustomDrawerContent";

const Drawer = createDrawerNavigator();

const AppNavigator = (props) => {
  const { logout } = useContext(AuthContext);
  // const { isLoggedIn, logout, isAdmin } = useAuth();
  // console.log("IsLoggedIn", isLoggedIn);
  // console.log("IsAdmin", isAdmin);
  // if(isLoggedIn){
  return (
    <Drawer.Navigator
      // initialRouteName={isLoggedIn ? "Home" : "Login"}
      initialRouteName="LandingPage"
      screenOptions={({ navigation }) => ({
        headerShown: true,
        headerTitleAlign: "center",
        className: "bg-sky-500",
        headerStyle: { backgroundColor: "#39AFEA", height: 100 },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
        headerLeft: () => {
          return (
            <Ionicons
              name="menu"
              size={40}
              color="white"
              style={{ marginLeft: 10 }}
              onPress={() => navigation.toggleDrawer()}
            />
          );
        },
        headerRight: () => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              {/* <Image
                source={require("../../assets/images/logofsa2.webp")}
                style={styles.img}
              /> */}
              <Icon
                name="logout"
                size={35}
                style={{ marginRight: 10 }}
                color="white"
                onPress={logout}
              />
            </TouchableOpacity>
          );
        },
      })}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{ animation: "slide_from_right", headerTitle: "" }}
      />

      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{ animation: "slide_from_right", headerTitle: "" }}
      />
      <Drawer.Screen
        name="AddRdv"
        component={AddRdv}
        options={{ animation: "slide_from_right", headerTitle: "" }}
      />
      <Drawer.Screen
        name="LandingPage"
        component={LandingPage}
        options={{ animation: "slide_from_right", headerTitle: "" }}
      />
    </Drawer.Navigator>
  );
};

// };

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  img: {
    width: 90,
    height: 50,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
  },
});

export default AppNavigator;
