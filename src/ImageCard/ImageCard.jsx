const ImageCard = ({ image, openModal }) => {
  const handleClick = () => {
    openModal(image);
  };

  return (
    <div onClick={handleClick}>
      <img src={image.urls.small} alt={image.description} />
    </div>
  );
};

export default ImageCard;
