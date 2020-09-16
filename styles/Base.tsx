import { StyleSheet } from 'react-native'
import { theme } from '../constants'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  padding: 0 20px;
  background-color: ${props => props.theme.background};
`;

export const PaddingContainer = styled.View`
  padding: 0 20px;
`;

export const ContainerButton = styled.View`
  width: 100%;
  align-items: center;
`;
export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const W100 = styled.View`
  width: 100%;
`;

export const Center = styled.View`
  width: 100%;
  align-items: center;
  /* flex-direction: row;
  justify-content: center; */
`;

export const Between = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ScrollContainer = styled.ScrollView`
  /* background-color: #fff;
  flex: 1; */
  /* justify-content: center; */
`;

export const HeaderBack = styled.TouchableOpacity``;

export const ImagenBack = styled.Image`
  height: 25px;
  width: 25px;
`;

export const Base = StyleSheet.create({
  // FLEXBLOX

  viewContainer: {
    flex: 1,
    paddingHorizontal: 20,
    // backgroundColor: '#fff'
  },
  row: {
    flexDirection: 'row',
    // alignItems: 'center',
  },

  between:{
    justifyContent: 'space-between',
  },

  alignItemsCenter: {
    alignItems: 'center',
  },

  alignItemEnd: {
    alignItems: 'flex-end',
  },

  alignItemsStart: {
    alignItems: 'flex-start',
  },

  justifyCenter:{
    justifyContent: 'center',
  },

  justifyEnd: {
    justifyContent: 'flex-end',
  },

  justifyAround: {
    justifyContent: 'space-around',
  },

  // TEXT 
  textBold: {
    fontWeight: '700',
  },
  textSemiBold: {
    fontWeight: '600',
  },
  textNormal: {
    fontWeight: '500',
  },
  textCenter: {
    textAlign: 'center',
  },
  textLeft: {
    textAlign: 'left',
  },
  textRight: {
    textAlign: 'right'
  },

  textFooter: {
    textAlign: 'center',
    lineHeight: 18,
    marginTop: 30,
  },

  // HEADER NAVIGATION
  headerNavigation: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  w100: {
    width: '100%'
  },

  w50:{
    width: '48%',
  }

})