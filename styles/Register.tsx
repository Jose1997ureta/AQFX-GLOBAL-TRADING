import { StyleSheet } from 'react-native'
import { theme } from '../constants'
import styled from 'styled-components/native'

export const HeaderTitle = styled.Text`
  font-size: ${theme.sizes.h4}px;
  text-align: center;
  font-weight: ${theme.weight.bold};
  margin-bottom: 10px;
  color: ${theme.colors.secondary};
`;

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

export const ShowPassword = styled.TouchableOpacity`
  position: absolute;
  top: 2.5px;
  right: 0;
  z-index: 1;
  padding: ${theme.sizes.padding}px;
`;

export const ContainerBandera = styled.View`
  position: absolute;
  top: 2.5px;
  left: 0; 
  z-index: 1;
  flex-direction: row;
  align-items: center;
  padding: ${theme.sizes.padding}px; 
`;

export const TextPhone = styled.Text`
  color: ${props => props.theme.textColor};
  padding-left:5px;
`;

// SUSCRIBE 2
export const HeaderTarjeta = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 37px 0 28px;
`;

export const HeaderTarjetaText = styled.Text`
  font-weight: ${theme.weight.bold};
  font-size: ${theme.sizes.h4}px;
  color: ${theme.colors.secondary};
`;

export const ContainerTarjeta = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 25px;
  margin-top: 27px;
`;

export const HeaderMonto = styled.View`
  width: 100%;
  margin: 37px 0 28px; 
`;

export const HeaderMontoText = styled.Text`
  font-weight: ${theme.weight.bold};
  font-size: ${theme.sizes.h4}px;
  color: ${theme.colors.secondary};
`;

export const Card = styled.View`
  width: 100%;
  background-color: #fff;
  border-radius: ${theme.sizes.radiusInput}px;
  padding: 73px 16px;
  margin-bottom: 56px;
`;

export const CardText = styled.Text`
  font-size: ${theme.sizes.h3}px;
  color: ${theme.colors.secondary};
  font-weight: ${theme.weight.bold};
`;

export const CardMonto = styled.Text`
  font-size: ${theme.sizes.h1}px;
  color: ${theme.colors.primary};
  font-weight: ${theme.weight.bold};
`;

export const RegisterStyle = StyleSheet.create({
  ButtonAvatarShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },

  CardShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 4,
  },
})