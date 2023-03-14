import "./modal.css";
import { FaTimes } from "react-icons/fa";

const Modal = ({ setOpenModal, children }: any) => {
  return (
    <div className="modalBackground">
      <div className="modal">
        <div className="cancelIcon">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            <FaTimes />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
