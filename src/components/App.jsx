import { Component } from 'react';
import axios from 'axios';


import { ImageGallery } from './ImageGallery/ImageGallerry';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
// import { Button } from './Button/Button';
// import { Loader } from './Loader/Loader';
// import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    searchQuery: ' ',
    images: [],
    isLoading: false,
    error: null,
  };

  async componentDidUpdate(prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.setState({ isLoading: true });
      const BASE_URL = 'https://pixabay.com/api/?key=';
      const API_KEY = '33161482-d6f209deccbe404fb00ae6950';
      const params = new URLSearchParams({
        key: API_KEY,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        per_page: 12,
      });
      try {
        const response = await axios.get(
          `${BASE_URL}${API_KEY}&q=${this.state.searchQuery}&${params}`
        );
        this.setState({ images: response.data });
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }
  handleSearch = searchQuery => {
    this.setState({ searchQuery });
  };
  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleSearch} />
        <ImageGallery searchQuery={this.state.searchQuery}>
          <ImageGalleryItem />
        </ImageGallery>
      </div>
    );
  }
}

/* <ImageGallery>
        <ImageGalleryItem />
      </ImageGallery>
      <Button />
      <Loader />
      <Modal /> */
