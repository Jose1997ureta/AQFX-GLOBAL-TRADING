import { AsyncStorage } from 'react-native'

export const themeView = async() => {
  let modo = await AsyncStorage.getItem('themeView');
  let session = await AsyncStorage.getItem('token');
  if(modo == null)[
    modo = 'ThemeLight'
  ]

  return {session, modo};
}

export const colors = { 
  primary: '#28A070',
  secondary: '#4A4A4D',
  third: '#F4F4F4',
  danger: '#CD4949',
  textLight: '#C4C4C4',
}

export const sizes = {
  // global sizes
  base: 18,
  margin: 14,
  padding: 16,
  radiusInput: 8,

  // font sizes
  h1: 36,
  // h2: 26,
  // h3: 24,
  // h4: 18,
  // h5: 14,
  // h6: 12,
  h2: 28,
  h3: 26,
  h4: 20,
  h5: 16,
  h6: 14,
};

export const fonts = {
  h1: {
    fontSize: sizes.h1
  },
  h2: {
    fontSize: sizes.h2
  },
  h3: {
    fontSize: sizes.h3
  },
  h4: {
    fontSize: sizes.h4
  },
  h5: {
    fontSize: sizes.h5
  },
  h6: {
    fontSize: sizes.h6
  },
}

export const weight = {
  normal: "500",
  semibold: "600",
  bold: "700",
}
