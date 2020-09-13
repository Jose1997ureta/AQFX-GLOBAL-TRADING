import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'

// SCREENS
import HomeScreen from '../Home'
import PostScreen from '../Post'
import CursoScreen from '../Cursos'
import DetalleCursoScreen from '../DetalleCurso'


export const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Post: PostScreen,
},{
  initialRouteName: 'Home',
  // mode: 'none'
  headerMode: 'none'
})

export const CursosStack = createStackNavigator({
  Curso: CursoScreen,
  DetalleCurso: DetalleCursoScreen,
},{
  initialRouteName: 'Curso'
})
