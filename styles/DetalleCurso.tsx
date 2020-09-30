import styled from 'styled-components/native'
import { theme } from '../constants'

export const DetalleHeader = styled.View`
  background-color: ${(props:any) => props.theme.fondo3};
  padding-bottom: 18px;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  margin-bottom: ${theme.sizes.margin}px;
`;

export const TituloDetalleHeader = styled.Text`
  font-size: ${theme.sizes.h1}px;
  color: ${(props:any) => props.theme.fondo6};
  line-height: 39px;
  font-weight: ${theme.weight.bold};
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const TitleProgress = styled.Text`
  font-size: ${theme.sizes.h6}px;
  line-height: 16px;
  color: #fff;
  font-weight: ${theme.weight.bold};
  margin-bottom: 5px;
`

export const ProgressContainer = styled.View`
  flex-direction: row;
  margin-bottom: 9px;
  align-items: center;
`;

export const Progress = styled.View`
  flex: 1;
  background-color: #fff;
  border-radius: 5px;
  height: 6px;
`;

export const DetalleTeacher = styled.Text`
  font-size: ${theme.sizes.h6}px;
  line-height: 16px;
  color: #fff;
  font-weight: ${theme.weight.bold};
`;

export const DetalleTime = styled.Text`
  font-size: ${theme.sizes.h6}px;
  line-height: 16px;
  color: #fff;
  font-weight: ${theme.weight.bold};
`;

export const CardVideoContainer = styled.View`
  width: 100%;
  padding: 0 20px;
  background-color: ${(props:any) => props.theme.fondo1};
`;

export const CardVideo = styled.TouchableHighlight`
  flex-direction: row;
  background-color: ${(props:any) => props.theme.fondo2};
  border-radius: 5px;
  height: 77px;
  width: 100%;
  margin-bottom: 8px;
`;

export const CardVideoTitle = styled.Text`
  font-size: ${theme.sizes.h6}px;
  line-height: ${theme.sizes.h6}px;
  color: ${(props:any) => props.theme.fondo4};
  font-weight: ${theme.weight.bold};
  margin-bottom: 4px;
`;

export const CardVideoImage = styled.View`
  border-radius: 5px;
  background-color: #eee;
  width: 115px;
  position: relative;
`;

export const CardVideoImageTime = styled.Text`
  position: absolute;
  bottom: 3px;
  right: 6px;
  color: #fff;
  font-weight: ${theme.weight.bold};
`;

export const CardVideoContent = styled.View`
  padding: 5px 10px;
  flex: 1;
`;

export const CardVideoContentTitle = styled.Text`
  color: ${theme.colors.primary};
  font-size: ${theme.sizes.h6}px;
  margin-bottom: 7px;
  font-weight: ${theme.weight.bold};
  line-height: ${theme.sizes.h6}px;
`;

export const CardVideoContentDescription = styled.Text`
  color: ${(props:any) => props.theme.fondo4};
  font-size: 12px;
  line-height: 14px;
  font-weight: ${theme.weight.bold};
`;

export const CardVideoSeparate = styled.View`
  width: 100%;
  height: 3px;
  background-color: ${theme.colors.primary};
`;