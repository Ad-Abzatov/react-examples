import { useState } from "react"
import Modal from "../components/Modal";

const Forms = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      Формы
      <button onClick={openModal}>Открыть форму</button>
      <Modal isOpen={isModalOpen} onClose={closeModal}/>
    </div>
  )
}

export default Forms
