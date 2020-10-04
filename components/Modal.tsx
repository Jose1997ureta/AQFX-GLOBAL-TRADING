import React from 'react'
import { Modal, Dimensions } from 'react-native' 
import styled from 'styled-components/native'
import {theme} from '../constants'

export const ModalScreen = ({children,visibility}:any) => {
  return (
    <Modal
      animationType='fade'
      transparent={true}
      visible={visibility}
    >
      <ModalContainer>
        <Modals>
          {children}
        </Modals>
      </ModalContainer>
    </Modal>
  )
}

export const ModalContainer = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: row;
  justify-content: center;
  align-items:center;
  background-color: rgba(0,0,0,0.1);
`;

export const Modals = styled.View`
  background-color: ${theme.colors.primary};
  border-radius: 8px;
  padding: 20px;
  width: 270px;
  height: 275px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

