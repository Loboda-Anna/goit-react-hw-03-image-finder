import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ image }) => {
  return (
    <li className={css.ImageGalleryItem}>
      <img src={image.webformatURL} alt={image.tags} />
    </li>
  );
};
