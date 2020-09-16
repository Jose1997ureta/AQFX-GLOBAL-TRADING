import { theme } from '../constants'
import styled from 'styled-components/native'

export const NoticeContainer = styled.View`
  width: 100%;
  background-color: ${theme.colors.primary};
  height: 150px;
`;

export const NoticeTitle = styled.Text`
  margin-top: 21px;
  margin-bottom: 23px;
  color: #fff;
  font-size: ${theme.sizes.h4}px;
  font-weight: ${theme.weight.bold};
  line-height: 20px;
`;

export const NoticeImageContainer = styled.View`
  width: 100%;
  height: 230px;
  border-radius: ${theme.sizes.radiusInput}px;
  margin-bottom: 20px;
  margin-top: -53px;
  background-color: #eee;
`;

export const NoticeImage = styled.Image`
  width: 100%;
  height: 230px;
  position: absolute;
  border-radius: ${theme.sizes.radiusInput}px;
`;

export const NoticeSubtitle = styled.Text`
  font-size: ${theme.sizes.h6}px;
  font-weight: ${theme.weight.bold};
  line-height: ${theme.sizes.h5}px;
  color: ${theme.colors.secondary};
  margin-bottom: 15px;
`;

export const NoticeDescription = styled.Text`
  font-size: ${theme.sizes.h6}px;
  line-height: ${theme.sizes.h5}px;
  color: ${theme.colors.secondary};
  margin-bottom: 15px;
`;

export const NoticeLinkBlack = styled.Text`
  font-size: ${theme.sizes.h6}px;
  font-weight: ${theme.weight.bold};
  line-height: ${theme.sizes.h5}px;
  color: ${theme.colors.secondary};
  margin-right: 10px;
`;

export const NoticeLink = styled.Text`
  font-size: ${theme.sizes.h6}px;
  line-height: ${theme.sizes.h5}px;
  color: #00A3FF;
`;