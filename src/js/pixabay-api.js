import axios from 'axios';

const myKey = "50629766-ca4e4f15305d377d5e3228fef";
const url = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
  const params = {
    key: myKey,
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true
  };

  return axios.get(url, { params })
    .then(response => {
      if (response.data.hits.length === 0) {
        throw new Error('Sorry, there are no images matching your search query. Please try again!');
      }
      return response.data; 
    });
}
