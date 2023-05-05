import React, { useState } from 'react';

import ImageGallery from './ImageGallery/ImageGallerry';
import { Searchbar } from './Searchbar/Searchbar';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading] = useState(false);

  const getSearchQuery = searchQuery => {
    setSearchQuery(searchQuery);
  };

  return (
    <div>
      <Searchbar onSubmit={getSearchQuery} isSubmitting={isLoading} />
      <ImageGallery query={searchQuery} />
    </div>
  );
}
