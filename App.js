import React from "react";
import { AppNav } from "./src/navigation/AppNav";
import AuthContextProvider from "./src/context/AuthContext";
import { Provider } from "react-redux";
import { store } from "./src/redux/store/store";

export default function App() {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <AppNav />
      </AuthContextProvider>
    </Provider>
  );
}
