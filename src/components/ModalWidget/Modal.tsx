import React, { FunctionComponent } from "react";
import ReactDOM from "react-dom";
import { Wrapper, StyledModal, Content, Backdrop } from "./ModalStyle";
import { ModalProps } from "./useModal";

export const Modal: FunctionComponent<ModalProps> = ({
  isShown,
  hide,
  modalContent,
}) => {
  const modal = (
    <React.Fragment>
      <Backdrop />
      <Wrapper onMouseLeave={hide}>
        <StyledModal>
          <Content>{modalContent}</Content>
        </StyledModal>
      </Wrapper>
    </React.Fragment>
  );
  return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};
