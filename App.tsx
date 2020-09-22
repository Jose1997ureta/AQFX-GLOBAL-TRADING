// import { createAppContainer} from 'react-navigation'
// import { BaseStack } from './screens/navigation/AuthStack'

// export default createAppContainer(BaseStack)

import React, { useState, useEffect } from "react";
import { AsyncStorage } from "react-native";
import { StateProvider } from "./screens/states/ThemeState";

import {ThemeLight, ThemeDark} from "./styles";

import Index from "./index";

export default function App() {
  const initialState = { theme: ThemeLight };

  async function updateStorage(state) {
    try {
      await AsyncStorage.setItem("DarkModeKey", state.toString());
    } catch (err) {
      console.log("error" + err);
    }
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case "enableDarkMode":
        updateStorage(true);
        return {
          ...state,
          theme: ThemeDark
        };
      case "disableDarkMode":
        updateStorage(false);
        return {
          ...state,
          theme: ThemeLight
        };
      default:
        return state;
    }
  };

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Index />
    </StateProvider>
  );
}