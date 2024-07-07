import { useState, useEffect } from "react";
import Modal from "react-modal";
import { fetchPhotos } from "../../helpers/unsplash-api";
import { SearchBar } from "../SearchBar/SearchBar";
import Loader from "../Loader/Loader";
import ImageGallery from "../ImageGallery/ImageGallery";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [photos, setPhotos] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [image, setImage] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    if (!inputValue) return;
    async function fetchImg() {
      try {
        setLoader(true);
        setError(false);
        const data = await fetchPhotos(inputValue, page);
        setPhotos((prevPhotos) => {
          return [...prevPhotos, ...data];
        });
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    }

    fetchImg();
  }, [inputValue, page]);

  const handleGetImage = (newValue) => {
    setPhotos([]);
    setPage(1);
    setInputValue(newValue);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleOpenModal = (img) => {
    setImage(img);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  Modal.setAppElement("#root");
  return (
    <div>
      <SearchBar onSearch={handleGetImage} />
      {error && <ErrorMessage />}
      {loader && <Loader />}
      <ImageGallery images={photos} openModal={handleOpenModal} />
      {image && (
        <ImageModal
          isOpen={openModal}
          onClose={handleCloseModal}
          image={image}
        />
      )}
      {photos.length > 0 && !loader && (
        <LoadMoreBtn onLoadMore={handleLoadMore} />
      )}
    </div>
  );
}

export default App;
