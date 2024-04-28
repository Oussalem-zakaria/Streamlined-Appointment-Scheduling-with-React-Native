import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [user, setUser] = useState(null);

  const login = (token, user) => {
    setIsLoading(true);
    AsyncStorage.setItem("userToken", token);
    AsyncStorage.setItem("user", JSON.stringify(user));
    setUser(user);
    setUserToken(token);
    setIsLoading(false);
  };

  const logout = () => {
    setIsLoading(true);
    AsyncStorage.removeItem("userToken");
    AsyncStorage.removeItem("user");
    setUser(null);
    setUserToken(null);
    setIsLoading(false);
  };

  const isLoging = async () => {
    try {
      setIsLoading(true);
      const token = await AsyncStorage.getItem("userToken");
      setUserToken(token);
      const user = await AsyncStorage.getItem("user");
      setUser(JSON.parse(user));
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    isLoging();
  }, []);

  return (
    <AuthContext.Provider
      value={{ login, logout, isLoading, userToken, isLoging, user }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
