import React from 'react'
import { createAppContainer, createSwitchNavigator} from 'react-navigation'
import { HomeStack, CursoExamenStack } from './ScreenStack'
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
    screen: CursoExamenStack,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <SimpleLineIcons name='notebook' size={24} color={tintColor}/>,
    }
  },
  Perfil: {
    screen: CursoExamenStack,
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