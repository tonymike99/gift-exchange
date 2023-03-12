import { CreateNewListForm } from "../index";
import React from "react";
import Modal from "react-modal";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

function CreateNewListModalSidebar() {
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

  // ----------------------------------------------------------------------------------------------------

  return (
    <>
      <button
        className="bg-blue-500 text-white -ml-1 px-2 py-1 rounded-lg w-32"
        onClick={openModal}
      >
        <AddIcon /> Create List
      </button>
      <Modal
        isOpen={IsModalOpen}
        onAfterOpen={() => {}}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Create List Modal"
      >
        <button className="" onClick={closeModal}>
          <CloseIcon />
        </button>
        <h2 className="text-2xl font-bold text-center mb-5">Create List</h2>
        <CreateNewListForm closeModal={closeModal} />
      </Modal>
    </>
  );
}

export default CreateNewListModalSidebar;
