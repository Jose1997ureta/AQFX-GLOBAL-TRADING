import React from 'react'
import { createStackNavigator, CardStyleInterpolators } from 'react-navigation-stack'

// SCREENS
import HomeScreen from '../Home'
import { NoticeScreen } from '../Notice'
// import PostScreen from '../Post'
import CursoScreen from '../Cursos'
import DetalleCursoScreen from '../DetalleCurso'

export const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Notice: NoticeScreen,
},{
  initialRouteName: 'Home',
  headerMode: 'none',
  defaultNavigationOptions: {
    gestureEnabled: false,
    gestureDirection: 'horizontal',
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  },
})

export const CursosStack = createStackNavigator({
  Curso: CursoScreen,
  DetalleCurso: DetalleCursoScreen,
},{
  initialRouteName: 'Curso'
})
