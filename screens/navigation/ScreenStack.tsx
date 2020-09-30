import React from 'react'
import { createStackNavigator, CardStyleInterpolators } from 'react-navigation-stack'

// SCREENS
import { HomeScreen } from '../Home'
import { NoticeScreen } from '../Notice'
import { LiveScreen } from '../Live'
import { Live2Screen } from '../Live2'
import { CursoScreen } from '../Cursos'
import { DetalleCursoScreen } from '../DetalleCurso'
import { VideoScreen } from '../Video'

export const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Notice: NoticeScreen,
  Live: LiveScreen,
  Live2: Live2Screen,
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
  Video: VideoScreen,
},{
  initialRouteName: 'Curso',
  headerMode: 'none',
  defaultNavigationOptions: {
    gestureEnabled: false,
    gestureDirection: 'horizontal',
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  },
})
