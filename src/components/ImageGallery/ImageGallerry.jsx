import { Component } from 'react';
import css from './ImageGallery.module.css';

import { ImageGalleryItem } from 'components/ImageGallery/ImageGalleryItem/ImageGalleryItem';
import { getImages } from 'services/getImages';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import { Modal } from 'components/Modal/Modal';

export class ImageGallery extends Component {
  state = {
    // searchQuery: ' ',
    images: [],
    isLoading: false,
    error: null,
    page: 1,
  };
  // getSearchQuery() {
  //   const searchQuery = this.props.searchQuery;
  //   this.setState({ searchQuery });
  // }
  async componentDidUpdate(prevProps) {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      try {
        this.setState({ isLoading: true });
        const images = await getImages(this.props.searchQuery, this.state.page);
        console.log(images);
        this.setState({
          images,
          isLoading: false,
        });
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  render() {
    const { images, isLoading, error } = this.state;
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
        {images.length > 0 && !isLoading && <Button />}
      </>
    );
  }
}
//
