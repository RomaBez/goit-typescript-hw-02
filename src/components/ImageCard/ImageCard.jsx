import css from "./ImageCard.module.css";

const ImageCard = ({ image, openModal }) => {
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
