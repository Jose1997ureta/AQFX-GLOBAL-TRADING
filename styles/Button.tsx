import { theme } from '../constants'
import styled from 'styled-components/native'
import { StyleSheet } from 'react-native'

export const ButtonPrimary = styled.TouchableOpacity`
  padding: 9px 29px;
  border-radius: 5px;
  background-color: ${theme.colors.primary};
`;

export const ButtonSecondary = styled.TouchableOpacity`
  padding: 9px 29px;
  border-radius: 5px;
  background-color: ${props => props.theme.backgroundButtonLogin};
`;

export const TextButtonSecondary = styled.Text`
  text-align: center;
  font-size: ${theme.sizes.h4}px;
  font-weight: ${theme.weight.bold};
  color: ${props => props.theme.TextButtonLogin};
`;

export const TextButtonPrimary = styled.Text`
  text-align: center;
  font-size: ${theme.sizes.h4}px;
  font-weight: ${theme.weight.bold};
  color: #fff;
`;

export const ButtonStyle = StyleSheet.create({
  ButtonShadow: {
    shadowColor: '#000',
    shadowOffset: {width: 0,height: 3},
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  }
})

// export const buttonStyle = StyleSheet.create({
//   // BUTTON
//   button:{
//     paddingLeft: 29,
//     paddingRight: 29,
//     paddingTop: 9,
//     paddingBottom: 9,
//     borderRadius: 5,

//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 3,
//     },
//     shadowOpacity: 0.29,
//     shadowRadius: 4.65,

//     elevation: 7,
//   },
//   buttonPrimary:{
//     backgroundColor: theme.colors.primary,
//   },
//   buttonSecondary: {
//     backgroundColor: '#fff'
//   },
//   buttonText: {
//     textAlign: 'center',
//     fontSize: theme.sizes.h4,
//   },
// })