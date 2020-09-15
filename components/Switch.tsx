import React, { useState } from "react";
import {View ,Switch,StyleSheet } from 'react-native';

import { colors } from '../constants/theme'
import { Base } from '../styles/Base'

export const HeaderNavigation = ({ children }) : Promise<> => {

  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    console.log(isEnabled)
  }

  return (
    <View style={Base.headerNavigation}>
      {children}
      <Switch
        trackColor={{ false: colors.secondary , true: "#eee" }}
        thumbColor={isEnabled ? colors.secondary : '#fff'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      /> 
      
    </View>
  )
}