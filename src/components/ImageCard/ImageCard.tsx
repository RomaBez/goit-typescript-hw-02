import React from "react";
import { Photo } from "../../helpers/unsplash-api";
import css from "./ImageCard.module.css";

interface ImageProps {
  image: Photo;
  openModal: (image: Photo) => void;
}

const ImageCard: React.FC<ImageProps> = ({ image, openModal }) => {
  const handleClick = () => {
    openModal(image);
  };

  return (
    <div onClick={handleClick} className={css.container}>
      <img
        src={image.urls.small}
        alt={image.description}
        className={css.card}
      />
    </div>
  );
};

export default ImageCard;
