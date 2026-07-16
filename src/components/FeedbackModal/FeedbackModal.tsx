import React from "react";
import {
  ModalActions,
  ModalButton,
  ModalCard,
  ModalMessage,
  ModalOverlay,
  ModalTitle,
} from "./styles";

interface FeedbackModalProps {
  isOpen: boolean;
  title?: string;
  message: string;
  onClose: () => void;
}

const FeedbackModal = ({ isOpen, title = "Notification", message, onClose }: FeedbackModalProps) => {
  if (!isOpen) {
    return null;
  }

  return (
    <ModalOverlay onClick={onClose}>
      <ModalCard role="dialog" aria-modal="true" aria-label={title} onClick={(event) => event.stopPropagation()}>
        <ModalTitle>{title}</ModalTitle>
        <ModalMessage>{message}</ModalMessage>
        <ModalActions>
          <ModalButton onClick={onClose}>OK</ModalButton>
        </ModalActions>
      </ModalCard>
    </ModalOverlay>
  );
};

export default FeedbackModal;

