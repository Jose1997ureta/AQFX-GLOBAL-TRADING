
import { theme } from '../constants'
import styled from 'styled-components/native'

export const TitleHome = styled.Text`
  font-size: ${theme.sizes.h1}px;
  color: ${props => props.theme.textColor};
  line-height: 39px;
  font-weight: ${theme.weight.bold};
  margin-right: 14px;
`;

export const PuntoRed = styled.View`
  width: 15px;
  height: 15px;
  background-color: #BA0019;
  border-radius: 7.5px;
`;

export const CardHome = styled.TouchableOpacity`
  width: 48%;
  height: 230px;
  border-radius: ${theme.sizes.radiusInput}px;
  flex-direction: row;
  align-items: flex-end;
`

export const CardHomeImage = styled.Image`
  height: 230px;
  width: 100%;
  position: absolute;
  border-radius: ${theme.sizes.radiusInput}px;
`;

export const CardHomeContent = styled.View`
  position: absolute;
  height: 107px;
  width: 100%;
  background-color: ${theme.colors.secondary};
  opacity: 0.8;
  border-radius: ${theme.sizes.radiusInput}px;
  padding: 10px;
  justify-content: space-between;
`;

export const CardHomeContentText = styled.Text`
  font-size: ${theme.sizes.h4}px;
  color: #FFF;
  line-height: 20px;
  font-weight: ${theme.weight.bold};
`;

export const Separate = styled.View`
  width: 38px;
  height: 4px;
  background-color: ${props => props.theme.textColor};
  margin-top: 34px;
  margin-bottom: 30px;
  border-radius: 15px;
`;

export const CardHomeContentView = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const CardHomeContentViewText = styled.Text`
  color: #fff;
  margin-left: 5px;
`;

export const NoticeHomeContainer = styled.View`
  flex: 1;
  background-color: ${props => props.theme.background};;
`;

export const NoticeHomeTitle = styled.Text`
  font-size: ${theme.sizes.h1}px;
  color: ${props => props.theme.textColor};
  line-height: 39px;
  font-weight: ${theme.weight.bold};
  padding: 0 20px;
`;

export const NoticeHomeTitleLine = styled.View`
  width: 38px;
  height: 4px;
  background-color: ${theme.colors.primary};
  border-radius: 1px;
  margin-left: 20px;
`;