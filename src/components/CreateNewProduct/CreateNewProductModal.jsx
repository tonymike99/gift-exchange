import React from "react";
import Modal from "react-modal";
import { CreateNewProductForm } from "../index";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

function CreateNewProductModal() {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      color: "white",
      backgroundColor: "black",
      right: "auto",
      bottom: "auto",
      borderRadius: "1rem",
      border: "none",
    },
  };

  Modal.setAppElement("#root");

  const [IsModalOpen, setIsModalOpen] = React.useState(false);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-lg"
        onClick={openModal}
      >
        <AddIcon /> Add product
      </button>
      <Modal
        isOpen={IsModalOpen}
        onAfterOpen={() => {}}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Add Product Modal"
      >
        <button className="" onClick={closeModal}>
          <CloseIcon />
        </button>
        <h2 className="text-2xl font-bold text-center mb-5">Add Product</h2>
        <CreateNewProductForm />
      </Modal>
    </>
  );
}

export default CreateNewProductModal;
