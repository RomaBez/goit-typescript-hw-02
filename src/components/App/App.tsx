import { useState, useEffect } from "react";
import { Photo } from "../../helpers/unsplash-api";
import Modal from "react-modal";
import { fetchPhotos } from "../../helpers/unsplash-api";
import { SearchBar } from "../SearchBar/SearchBar";
import Loader from "../Loader/Loader";
import ImageGallery from "../ImageGallery/ImageGallery";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";

function App() {
  const [inputValue, setInputValue] = useState<string>("");
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loader, setLoader] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState(1);
  const [image, setImage] = useState<Photo | null>(null);
  const [openModal, setOpenModal] = useState<boolean>(false);

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

  const handleGetImage = (newValue: string) => {
    setPhotos([]);
    setPage(1);
    setInputValue(newValue);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleOpenModal = (img: Photo) => {
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
