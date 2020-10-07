import { AsyncStorage } from 'react-native'

export const getSession = async() => {
  let session = await AsyncStorage.getItem('token');
  return session;
}

export const getFormatDate = (date: Date) =>{
  const fecha = new Date(date) 
    const day = fecha.getDate()
    const month = fecha.getMonth() + 1
    const year = fecha.getFullYear()
    let m = '', d = ''
    if(month < 10) {
      m = '0' + month
    }else{
      m = month.toString()
    }

    if(day < 10) {
      d = '0' + day
    }else{
      d = day.toString()
    }

    return `${d}/${m}/${year}`
}

export const _baseURL = () => 'https://dev.azzinformatica.com/api/v1/';

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
