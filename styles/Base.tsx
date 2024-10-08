import { StyleSheet } from 'react-native'
import styled from 'styled-components/native'

export const Vista = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props:any) => props.theme.fondo1};
`;

export const Container = styled.View`
  flex: 1;
  background-color: ${(props: any) => props.theme.fondo1};
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
`;

export const Between = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ScrollContainer = styled.ScrollView``;

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
  },
  row: {
    flexDirection: 'row',
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
  
  w100: {
    width: '100%'
  },

  w50:{
    width: '48%',
  },

  borderShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  }

})