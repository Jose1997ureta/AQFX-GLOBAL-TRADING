import { StyleSheet } from 'react-native'
import { colors, sizes, weight } from '../constants/theme'
import { theme } from '../constants'
import styled from 'styled-components/native'

export const HeaderBack = styled.TouchableOpacity``;

export const ImagenBack = styled.Image`
  height: 25px;
  width: 25px;
`;

export const HeaderTitle = styled.Text`
  font-size: ${theme.sizes.h4}px;
  text-align: center;
  font-weight: ${theme.weight.bold};
  margin-bottom: 10px;
`;

export const ImagenPaso1 = styled.Image``;

export const ButtonAvatar = styled.TouchableOpacity`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: #fff;
  margin-top: 37px;
  margin-bottom: 25px;
  justify-content: center;
  align-items: center;
`;

export const Avatar = styled.Image`
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

export const Camare = styled.Image``;

export const RegisterStyle = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff'
  // },
  // back:{
  //   height: 25,
  //   width: 25,
  // },
  // headerTitle: {
  //   fontSize: theme.sizes.h4,
  //   textAlign: 'center',
  //   fontWeight: '700',
  //   marginBottom: 10,
  // },
  // avatarPlaceholder: {
  //   width: 100,
  //   height: 100,
  //   borderRadius: 150 / 2,
  //   backgroundColor: '#FFF',
  //   marginTop: 37,
  //   marginBottom: 25,
  //   justifyContent: 'center',
  //   alignItems: 'center',

  //   shadowColor: "#000",
  //   shadowOffset: {
  //     width: 0,
  //     height: 1,
  //   },
  //   shadowOpacity: 0.22,
  //   shadowRadius: 2.22,
  //   elevation: 3,
  // },
  // userRegister:{
  //   position: 'absolute',
  //   width: 100,
  //   height: 100,
  //   borderRadius: 150 / 2,
  // },
  camera: {
    // width: 30,
    // height: 30,
  },

  mostrarPassword:{
    position: 'absolute',
    top: 3,
    right: 0,
    zIndex: 1,
    padding: theme.sizes.padding,
  },
  containerBandera:{
    position: 'absolute',
    top: 16,
    left: 16,
    zIndex: 1,
  },
  
  textError: {
    fontSize: sizes.h5,
    color: colors.danger,
    textAlign: 'center',
    marginBottom: sizes.margin,
    marginTop: 5
  },

  cardContainer: {
    width: '100%',
    // alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: theme.sizes.radiusInput,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 4,
    paddingHorizontal: theme.sizes.padding,
    paddingVertical: 73,
    marginBottom: 56,
  },
  cardText:{
    fontSize: theme.sizes.h3,
    color: theme.colors.secondary,
    fontWeight: theme.weight.bold,
  },
  cardMonto: {
    fontSize: theme.sizes.h1,
    color: theme.colors.primary,
    fontWeight: theme.weight.bold,
  }
})