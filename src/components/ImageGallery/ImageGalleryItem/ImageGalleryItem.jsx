import React, { useState } from 'react';
import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';
import { Modal } from 'components/Modal/Modal';
export default function ImageGalleryItem({ image }) {
  const [isModalShown, setModalShown] = useState(false);

  const toggleModal = () => {
    setModalShown(!isModalShown);
  };

  const { webformatURL, tags, largeImageURL } = image;

  return (
    <>
      <li className={css.ImageGalleryItem} onClick={toggleModal}>
        <img src={webformatURL} alt={tags} />
      </li>
      {isModalShown && (
        <Modal imageURL={largeImageURL} tags={tags} onClose={toggleModal} />
      )}
    </>
  );
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  tags: PropTypes.string,
  largeImageURL: PropTypes.string,
};
