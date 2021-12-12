import { useState } from "react";

export interface ModalProps {
  isShown?: boolean;
  hide?: () => void;
  modalContent?: JSX.Element;
  headerText?: string;
}

export const useModal = () => {
  const [isShown, setIsShown] = useState<boolean>(false);
  const toggle = () => setIsShown(true);
  const unToggle = () => setIsShown(false);

  return {
    isShown,
    toggle,
    unToggle,
  };
};
