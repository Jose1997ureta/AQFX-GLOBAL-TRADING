/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useEffect } from "react";
import { StatusBar, AsyncStorage } from "react-native";
import { ThemeProvider } from "styled-components";
import "react-native-gesture-handler";

import { useStateValue } from "./screens/states/ThemeState";

import Routes from "./screens/navigation/AuthStack";

const Index = () => {
  const [state, dispach] = useStateValue();

  useEffect(() => {
    async function getStoregetDarkMode() {
      const darkModeKey = await AsyncStorage.getItem("DarkModeKey");
      // const usuarioToken = await AsyncStorage.getItem("UserLogin");
      if (darkModeKey === "true") {
        dispach({
          type: "enableDarkMode"
        });
        // return;
      }else{
        dispach({
          type: "disableDarkMode"
        });
      }
     

      // if(usuarioToken !== ""){
      //   dispach({
      //     type: "loginTrue",
      //     user: usuarioToken
      //   })
      //   console.log("asjfdiashfioh")
      // }else{
      //   dispach({
      //     type: "loginFalse",
      //     user: "d"
      //   });
      // }
    }

    getStoregetDarkMode();
  }, []);

  return (
    <ThemeProvider theme={state.theme}>
      <StatusBar
        barStyle={state.theme.statusBarStyle}
        backgroundColor={state.theme.fondo1}
      />
      <Routes />
    </ThemeProvider>
  );
};

export default Index;
