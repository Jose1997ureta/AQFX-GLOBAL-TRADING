import React, { useEffect, useState, useReducer } from "react";
import {View ,Switch, AsyncStorage, Text } from 'react-native';

import { theme } from '../constants'
import { Base } from '../styles/Base'

export const HeaderNavigation = ({ children }) => {
  useEffect(() => {
    getTheme()
  }, [])
  
  const [isEnabled, setIsEnabled] = useState(true);

  const getTheme = async () => {
    const { modo } = await theme.themeView();
    if(modo == 'ThemeDark'){
      setIsEnabled(true);
    }else{
      setIsEnabled(false);
    }

    console.log(modo, isEnabled)
  }

  const toggleSwitch = async () => {
    setIsEnabled(previousState => !previousState);
    let themeView = ''
    isEnabled ? themeView = 'ThemeLight': themeView = 'ThemeDark'

    AsyncStorage.setItem('themeView', themeView)

    console.log(isEnabled, themeView)
  }

  return (
    <View style={Base.headerNavigation}>
      {children}
      <Switch
        trackColor={{ true: '#fff' , false: "#000" }}
        thumbColor={!isEnabled ? '#fff' : '#000'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      /> 
    </View>
  )
}