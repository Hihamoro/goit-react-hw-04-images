import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const searchParams = new URLSearchParams({
    key: '33254827-c3e2a932c5595413c2f51b6ee',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  });
  
export async function getImages(searchQuery, page) {
    const res = await axios.get(`?q=${searchQuery}&page=${page}&${searchParams}`);
    const data = res.data;
    return data;
  }