import React from "react";
import Modal from "react-modal";
import { CreateNewListForm } from "../index";
import AddBoxIcon from "@mui/icons-material/AddBox";
import CloseIcon from "@mui/icons-material/Close";

function CreateNewListModalNavbar() {
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
      <button onClick={openModal}>
        <AddBoxIcon />
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

export default CreateNewListModalNavbar;
