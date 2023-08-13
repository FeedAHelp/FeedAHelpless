import React from "react";
import * as Styled from './GenericModal.styled';

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, closeModal, children }) => {
  if (!isOpen) return null;

  return (
    <Styled.ModalContainer className={isOpen ? "one" : "out"} onClick={closeModal}>
      <Styled.ModalBackground className="modal-background">
        <Styled.ModalContent className="modal" onClick={(e) => e.stopPropagation()}>
          {children}
        </Styled.ModalContent>
      </Styled.ModalBackground>
    </Styled.ModalContainer>
  );
};

export default Modal;
