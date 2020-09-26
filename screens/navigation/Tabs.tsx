import React from 'react'
import { createAppContainer, createSwitchNavigator} from 'react-navigation'
import { HomeStack, CursosStack } from './ScreenStack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import  { Ionicons, SimpleLineIcons }  from '@expo/vector-icons'
import { theme } from '../../constants'

export const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <SimpleLineIcons name='home' size={24} color={tintColor}/>,
      
    },
  },
  Cursos: {
    screen: CursosStack,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <SimpleLineIcons name='notebook' size={24} color={tintColor}/>,
    }
  },
  Perfil: {
    screen: CursosStack,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-person' size={24} color={tintColor}/>,
    }
  }
}, {
  initialRouteName: 'Home',
  tabBarOptions:{
    showLabel: false,
    activeTintColor: theme.colors.primary,
    inactiveTintColor: theme.colors.secondary,
  }
})

export default createAppContainer(TabNavigator)