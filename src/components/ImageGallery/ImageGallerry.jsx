import React, { useState, useEffect } from 'react';
import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';

import ImageGalleryItem from 'components/ImageGallery/ImageGalleryItem/ImageGalleryItem';
import { getImages } from 'services/getImages';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';

export default function ImageGallery({ query }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const searchImages = async () => {
      try {
        setSearchQuery(query);
        setIsLoading(true);
        setPage(1);
        const respImages = await getImages(query, 1);
        if (respImages.length > 0) {
          setImages(respImages);
          setIsLoading(false);
        } else {
          alert('No results');
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    if (query) {
      searchImages(query);
    }
  }, [query]);

  useEffect(() => {
    const searchImages = async sQuery => {
      try {
        setIsLoading(true);
        const respImages = await getImages(sQuery, page);
        if (respImages.length > 0) {
          setImages(prevImages => [...prevImages, ...respImages]);
          setIsLoading(false);
        } else {
          alert('No results');
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    if (page > 1) {
      searchImages(searchQuery, page);
    }
  }, [page, searchQuery]);

  const loadNextPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      {images.length > 0 && (
        <ul className={css.ImageGallery}>
          {images.map(image => (
            <ImageGalleryItem key={image.id} image={image} />
          ))}
        </ul>
      )}
      {error && <p>Whoops, something went wrong: {error.message}</p>}
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && (
        <Button onHandleClick={loadNextPage} />
      )}
    </>
  );
}

ImageGallery.propTypes = { query: PropTypes.string.isRequired };
