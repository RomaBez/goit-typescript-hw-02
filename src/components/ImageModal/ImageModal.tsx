import Modal from "react-modal";
import css from "./ImageModal.module.css";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: {
    urls: {
      regular: string;
    };
  };
}

export default function ImageModal({
  isOpen,
  onClose,
  image,
}): ImageModalProps {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#F0F0F0",
      with: "100vh",
    },
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
      <img src={image.urls.regular} className={css.img} />
    </Modal>
  );
}
