// import { createAppContainer} from 'react-navigation'
// import { BaseStack } from './screens/navigation/AuthStack'

// export default createAppContainer(BaseStack)

import React, { useState, useEffect } from "react";
import { AsyncStorage } from "react-native";
import { StateProvider } from "./screens/states/ThemeState";

import { ThemeLight, ThemeDark } from "./styles";

import Index from "./index";

export default function App() {
  const initialState = { theme: ThemeLight};
  // const [usuario, setUsuario] = useState("");
  // // const [usuario, setUsuario] = useState({})
  
  // useEffect(()=> {
  //   async function getSessions(){
  //     let usuarioLogin = await AsyncStorage.getItem("UserLogin");
  //     setUsuario(usuarioLogin);
      
  //     // console.log(usuarioLogin)
  //   }
    
  //   getSessions();
  // })
  // const initialState = { theme: ThemeLight, user: usuario };

  async function updateStorage(state) {
    try {
      await AsyncStorage.setItem("DarkModeKey", state.toString());
    } catch (err) {
      console.log("error" + err);
    }
  }

  
  // UPDATE REEGISTER USER
  // async function userUpdateStorage(){
  //   try{
  //      AsyncStorage.getItem("UserLogin");
  //   }catch(err){
  //     console.log("error", err)
  //   }
  // }

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
      // case "loginTrue":
      //   // userUpdateStorage(true);
      //   return{
      //     ...state,
      //     user: usuario
      //   };
      // case "loginFalse":
      //   // userUpdateStorage(false);
      //   return {
      //     ...state,
      //     user: ""
      //   }
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