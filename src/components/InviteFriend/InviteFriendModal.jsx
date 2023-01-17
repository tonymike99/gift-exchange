import React from "react";
import Modal from "react-modal";
import { InviteFriendForm } from "../index";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

function InviteFriendModal() {
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
    <div>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-lg"
        onClick={openModal}
      >
        <AddIcon /> Invite friend
      </button>
      <Modal
        isOpen={IsModalOpen}
        onAfterOpen={() => {}}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Invite Friend Modal"
      >
        <button className="" onClick={closeModal}>
          <CloseIcon />
        </button>
        <h2 className="text-2xl font-bold text-center mb-5">Invite friend</h2>
        <InviteFriendForm />
      </Modal>
    </div>
  );
}

export default InviteFriendModal;
