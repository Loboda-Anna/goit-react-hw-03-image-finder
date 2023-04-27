import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/?key=';
const API_KEY = '33161482-d6f209deccbe404fb00ae6950';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
  per_page: 12,
};

export const getImages = async (searchQuery, page) => {
  const config = {
    params: {
      q: searchQuery,
      page: page,
    },
  };
  console.log(config);
  const response = await axios.get('', config);
  return response.data.hits;
};
//
