import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  top: 210px;
  right: -80px;
  transform: translate(-50%, -50%);
  z-index: 700;
  outline: 0;
`;
export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 500;
`;
export const StyledModal = styled.div`
z-index: 100;
background: #FFF5F1;
position: relative;
margin: auto;
border-radius: 8px;
width: 182px;
height: 253px;
}
`;
export const Content = styled.div`
  padding: 10px;
  max-height: 30rem;
  overflow-x: hidden;
  overflow-y: auto;
`;
