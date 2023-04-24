import axios from 'axios';

export const getImages = async searchQuery => {
  const BASE_URL = 'https://pixabay.com/api/?key=';
  const API_KEY = '33161482-d6f209deccbe404fb00ae6950';
  const params = new URLSearchParams({
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: 12,
  });
  const response = await axios.get(
    `${BASE_URL}${API_KEY}&q=${searchQuery}&${params}`
  );
  return response.data.hits;
};
