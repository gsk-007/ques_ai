import Modal from "react-modal";

const customStyles = {
  content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bottom: "auto",
    right: "auto",
    minHeight: "200px",
    minWidth: "600px",
    maxWidth: "60vw",
    borderRadius: "0.75rem",
    padding: "1.5rem",
    backgroundColor: "white",
  },
};

function CustomModal({ isOpen, children }) {
  return (
    <Modal
      isOpen={isOpen}
      style={customStyles}
      ariaHideApp={false}
      contentLabel="Example Modal"
    >
      {children}
    </Modal>
  );
}

export default CustomModal;
