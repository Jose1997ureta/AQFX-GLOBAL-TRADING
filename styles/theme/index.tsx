import { theme } from '../../constants/index'

export const ThemeLight = {
  background: '#FFF',
  backgrundDark: '#fff',
  backgroundPrimary: theme.colors.primary,
  textColor:  theme.colors.secondary,
  textColorDark: theme.colors.secondary,
  textColorPrimary: '#fff',

  backgroundButtonLogin: '#fff',
  TextButtonLogin: theme.colors.secondary,
  // backgroundButton: theme,

  backgroundInput: '#FFF',
  borderButton: '#eee',

  backgroundInputLogin: theme.colors.third,

  loading: '#fff',

  statusBarStyle: "dark-content",

  progressCurso: theme.colors.secondary,
}

export const ThemeDark = {
  background: theme.colors.secondary,
  backgrundDark: '#3E3E41',
  backgroundPrimary: '#3E3E41',

  textColor: '#FFF',
  textColorDark: theme.colors.textLight,
  textColorPrimary: theme.colors.primary,

  backgroundButtonLogin: '#6B6C6F',
  TextButtonLogin: '#CCC',
  // backgroundButton: ''

  backgroundInput: '#6B6C6E',
  borderButton: '#6B6C6E',

  backgroundInputLogin: '#6B6C6F',

  loading: theme.colors.primary,

  statusBarStyle: "light-content",

  progressCurso: theme.colors.primary,
}