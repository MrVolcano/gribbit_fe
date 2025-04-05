import ToastContainer from "react-bootstrap/ToastContainer";
import Toast from "react-bootstrap/Toast";
import { useError } from "../Contexts/ErrorContext";

const ToastPopup = () => {
  const { error, clearError } = useError();

  console.log("Running toast, error:", error);

  if (!error) {
    console.log("No error message to show");
    return null; // Don’t render if there’s no error
  }

  return (
    <ToastContainer
      className="p-3"
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 1050,
      }}
    >
      <Toast show={!!error} onClose={clearError} bg="danger">
        <Toast.Header closeButton={true}>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">Error</strong>
          <small>Just now</small>
        </Toast.Header>
        <Toast.Body className="text-white">{error}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default ToastPopup;
