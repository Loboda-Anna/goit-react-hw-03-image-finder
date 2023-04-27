import { Component } from 'react';

import { ImageGallery } from './ImageGallery/ImageGallerry';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    searchQuery: '',
    isLoading: false,
  };

  getSearchQuery = searchQuery => {
    this.setState({ searchQuery });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.getSearchQuery} isSubmitting={this.state.isLoading} />
        <ImageGallery searchQuery={this.state.searchQuery} />
      </div>
    );
  }
}

