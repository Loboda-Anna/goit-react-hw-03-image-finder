import { Component } from 'react';
import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';

import { ImageGalleryItem } from 'components/ImageGallery/ImageGalleryItem/ImageGalleryItem';
import { getImages } from 'services/getImages';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';

export class ImageGallery extends Component {
  state = {
    searchQuery: ' ',
    images: [],
    isLoading: false,
    error: null,
    page: 1,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      try {
        this.setState({
          searchQuery: this.props.searchQuery,
          isLoading: true,
          page: 1,
        });
        const images = await getImages(this.props.searchQuery, 1);
        images.length > 0
          ? this.setState({
              images,
              isLoading: false,
            })
          : alert('No results');
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ isLoading: false });
      }
    }

    if (
      prevState.page !== this.state.page &&
      prevState.searchQuery === this.state.searchQuery
    ) {
      try {
        this.setState({
          isLoading: true,
        });
        const images = await getImages(this.props.searchQuery, this.state.page);
        images.length > 0
          ? this.setState(prevState => ({
              images: [...prevState.images, ...images],
              isLoading: false,
            }))
          : alert('No results');
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  loadNextPage = prevState => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

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
        {images.length > 0 && !isLoading && (
          <Button onHandleClick={this.loadNextPage} />
        )}
      </>
    );
  }
}

ImageGallery.propTypes = { searchQuery: PropTypes.string.isRequired };
