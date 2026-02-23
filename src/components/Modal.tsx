import { FC } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: FC<ModalProps> = ({isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div>
      <h2>Всплывающая форма</h2>
      <form>
        <button type="button" onClick={onClose}>Закрыть</button>
      </form>
    </div>
  )
}

export default Modal
