import React, { useEffect, useState } from "react";
import {Switch, AsyncStorage, View } from 'react-native';
import styled from 'styled-components/native'
import { theme } from '../constants'

import { useStateValue } from '../screens/states/ThemeState'

export const HeaderNavigation = ({ children }) => {
  const [darkmode, setDarkmode] = useState(false);
  const [ , dispach ] = useStateValue();

  useEffect(() => {
    async function getInitialState() {
      const state = await AsyncStorage.getItem("DarkModeKey");
      if (state === "true") {
        setDarkmode(true);
        return;
      }

      setDarkmode(false);
    }
    getInitialState();
  }, []);


  function handleChange() {
    dispach({
      type: !darkmode ? "enableDarkMode" : "disableDarkMode"
    });
    setDarkmode(!darkmode);
  }

  return (
    <Navigation>
      {children}
      <Switch
        value={darkmode}
        onValueChange={handleChange}
        thumbColor={!darkmode ? '#fff' : theme.colors.secondary}
        trackColor={{ true: '#fff' , false: theme.colors.secondary }}
      />
    </Navigation> 
  )
}

const Navigation = styled.View`
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;