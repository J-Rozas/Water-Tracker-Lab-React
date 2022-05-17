import { useState } from "react";

const useToggleModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  }

  return {isModalOpen, toggleModal}
}

export default useToggleModal;