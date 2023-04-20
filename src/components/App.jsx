import { ImageGallery } from './ImageGallery/ImageGallerry';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

export const App = () => {
  return (
    <div>
      <Searchbar />
      {/* <ImageGallery>
        <ImageGalleryItem />
      </ImageGallery>
      <Button />
      <Loader />
      <Modal /> */}
    </div>
  );
};
