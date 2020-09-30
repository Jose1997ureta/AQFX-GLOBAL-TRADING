import { theme } from '../constants'
import styled from 'styled-components/native'

export const LiveItem = styled.View`
  flex: 1;
`;

export const LiveItemHeaderContainer = styled.View`
  width: 100%;
  background-color: #BA0019;
`;

export const LiveItemHeader = styled.View`
  width: 100%;
  background-color: ${(props: any) => props.theme.fondo1};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const LiveItemHeaderTitle = styled.Text`
  font-size: ${theme.sizes.h1}px;
  color: ${(props:any) => props.theme.fondo4};
  line-height: 39px;
  font-weight: ${theme.weight.bold};
  margin-right: 14px;
`;

export const LiveItemPuntoRed = styled.View`
  width: 15px;
  height: 15px;
  background-color: #BA0019;
  border-radius: 7.5px;
`;

export const LiveItemImageContainer = styled.View`
  width: 100%;
  height: 230px;
  border-radius: ${theme.sizes.radiusInput}px;
  margin-bottom: ${theme.sizes.margin}px;
  margin-top: ${theme.sizes.margin}px;
  background-color: #eee;
`;

export const LiveItemImage = styled.Image`
  width: 100%;
  height: 230px;
  position: absolute;
  border-radius: ${theme.sizes.radiusInput}px;
`;

export const LiveItemSubtitleContainer = styled.View`
  padding: 16px 20px;
`;

export const LiveItemSubtitle = styled.Text`
  color: #fff;
  font-size: ${theme.sizes.h4}px;
  font-weight: ${theme.weight.bold};
`;

export const LiveItemDescriptionContainer = styled.View`
  background-color: ${(props:any) => props.theme.fondo1};
  padding: 20px;
`;

export const LiveItemDescription = styled.Text`
  color: ${(props:any) => props.theme.fondo4};
  font-size: ${theme.sizes.h5}px;
  margin-bottom: ${theme.sizes.margin}px;
`;

export const LiveItemEnlace = styled.Text`
  color: ${(props:any) => props.theme.fondo4};
  font-size: ${theme.sizes.h5}px;
  margin-right: 5px;
  font-weight: ${theme.weight.bold};
`;

export const LiveItemLink = styled.Text`
  font-size: ${theme.sizes.h5}px;
  color: #00A3FF;
`;

export const LiveItemClave = styled.Text`
  color: ${(props:any) => props.theme.fondo4};
  font-size: ${theme.sizes.h5}px;
  font-weight: ${theme.weight.bold};
`;

export const LiveItemSeparador = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${(props:any) => props.theme.fondo4};
`;