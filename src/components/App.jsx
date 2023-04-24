import { Component } from 'react';

import { ImageGallery } from './ImageGallery/ImageGallerry';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { getImages } from 'services/getImages';
// import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
// import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    isLoading: false,
    error: null,
  };

  async componentDidUpdate(prevState) {
    if (!this.state.searchQuery) return;
    if (prevState.searchQuery !== this.state.searchQuery) {
      try {
        this.setState({ isLoading: true });
        const images = await getImages(this.state.searchQuery);
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

  getSearchQuery = searchQuery => {
    this.setState({ searchQuery });
  };

  render() {
    const { images, isLoading, error } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.getSearchQuery} isSubmitting={isLoading} />
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        {isLoading && <Loader />}
        {images.length > 0 && (
          <ImageGallery images={images}>
            <ImageGalleryItem />
          </ImageGallery>
        )}
      </div>
    );
  }
}

/* <ImageGallery>
        <ImageGalleryItem />
      </ImageGallery>
      <Button />
      
      <Modal /> */
