import React from "react";
import { Photo } from "../../helpers/unsplash-api";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

interface ImageGalleryProps {
  images: Photo[];
  openModal: (image: Photo) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, openModal }) => {
  return (
    <ul className={css.list}>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard image={image} openModal={openModal} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
