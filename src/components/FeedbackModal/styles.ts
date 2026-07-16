import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const ModalCard = styled.div`
  min-width: 260px;
  max-width: 420px;
  padding: 18px 22px;
  border-radius: 12px;
  background: #ffffff;
  color: #222222;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
`;

const ModalTitle = styled.h3`
  margin: 0 0 8px;
`;

const ModalMessage = styled.p`
  margin: 0;
`;

const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 14px;
`;

const ModalButton = styled.button`
  border: none;
  background: #4b59f0;
  color: #ffffff;
  padding: 8px 14px;
  border-radius: 6px;
  cursor: pointer;
`;

export {
  ModalOverlay,
  ModalCard,
  ModalTitle,
  ModalMessage,
  ModalActions,
  ModalButton,
};

