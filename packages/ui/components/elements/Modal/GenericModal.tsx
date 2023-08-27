import React from 'react'
import * as Styled from './GenericModal.styled'
import { Styled as styled } from './ModalCloseButton.styled'

interface ModalProps {
  isOpen: boolean
  closeModal: () => void
  children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ isOpen, closeModal, children }) => {
  if (!isOpen) return null

  return (
    <Styled.ModalContainer className={isOpen ? 'one' : 'out'} onClick={(e) => e.stopPropagation()}>
      <Styled.ModalBackground className='modal-background'>
        <Styled.ModalContent className='modal'>
          <button className='close-button' onClick={closeModal}>
            <styled.CloseButton />
          </button>
          {children}
        </Styled.ModalContent>
      </Styled.ModalBackground>
    </Styled.ModalContainer>
  )
}

export default Modal
