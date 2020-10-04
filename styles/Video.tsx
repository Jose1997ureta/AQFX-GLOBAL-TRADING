import styled from 'styled-components/native'
import { theme } from '../constants'

export const Header = styled.View`
  background-color: ${(props:any) => props.theme.fondo12};
`;

export const HeaderVideo = styled.View`
  background-color: ${theme.colors.primary};
  padding-bottom: 18px;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  margin-bottom: ${theme.sizes.margin}px;
`;

export const HeaderVideoTitle = styled.Text`
  font-size: ${theme.sizes.h4}px;
  color: #FFF;
  line-height: 20px;
  font-weight: ${theme.weight.bold};
  margin-top: 10px;
`;

export const VideoContainer = styled.View`
  width: 100%;
  height: 230px;
  border-radius: ${theme.sizes.radiusInput}px;
  margin-bottom: ${theme.sizes.margin}px;
  margin-top: ${theme.sizes.margin}px;
  background-color: #eee;
`;

// export const TabContainer = styled.View`
//   flex-direction: row;
//   background-color: ${theme.colors.primary};
//   position: relative;
// `;

// export const Tab = styled.TouchableOpacity`
//   width: 50%;
//   flex-direction: row;
//   align-items: center;
//   justify-content: center;
//   padding: 10px;
// `;

export const TabContent = styled.View`
  padding: 16px 20px;
`;

export const TabContentDescription = styled.Text`
  color: ${(props:any) => props.theme.fondo4};
  font-size: ${theme.sizes.h6}px;
  line-height: 16px;
`;

export const TabContentDescripcionButton = styled.TouchableHighlight`
  background-color: ${(props:any) => props.theme.fondo2};
  margin-top: ${theme.sizes.margin}px;
  width: 90%;
  padding: 10px 25px;
  border-radius: 5px; 
`;

export const TabContentDescripcionImage = styled.Image`
  /* margin-top: ${theme.sizes.margin}px; */
`;

export const TabContentDescripcionText = styled.Text`
  color: ${(props:any) => props.theme.fondo4};
  font-weight: ${theme.weight.bold};
  font-size: 18px;
`;  

// CARD COMENTARIOS
export const CardComentario = styled.View`
  width: 100%;
  padding: 20px 20px 5px;
  border-bottom-width: 2px;
  border-bottom-color: ${theme.colors.primary};
  border-style: solid;
`; 

export const CardComentarioImageContent = styled.View`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background-color: #EEE;
  position: relative;
`;

export const CardComentarioImagen = styled.Image`
  position: absolute;
  width: 44px;
  height: 44px;
  border-radius: 22px;
`;

export const CardComentarioContent = styled.View`
  flex: 1;
  margin-left: 22px;
`;

export const CardComentarioTitulo = styled.Text`
  font-size: ${theme.sizes.h6}px;
  color: ${(props:any) => props.theme.fondo4};
  line-height: ${theme.sizes.h5}px;
  font-weight: ${theme.weight.bold};
  margin-bottom: 5px;
`;

export const CardComentarioDescripction = styled.Text`
  font-size: 12px;
  color: ${(props:any) => props.theme.fondo4};
  line-height: ${theme.sizes.h6}px;
  margin-bottom: 5px;
`;

export const CardComentarioText = styled.Text`
  font-size: 10px;
  color: ${(props:any) => props.theme.fondo13};
  line-height: ${theme.sizes.h6}px;
  font-weight: ${theme.weight.bold};
`;

export const CardComentarioLike = styled.Image`
  margin-right: 5px;
  width: 16px;
  height: 16px;
`;

export const CardComentarioLikeNumber = styled.Text`
  font-size: ${theme.sizes.h6}px;
  color: ${(props:any) => props.theme.fondo4};
  font-weight: ${theme.weight.bold};
`;