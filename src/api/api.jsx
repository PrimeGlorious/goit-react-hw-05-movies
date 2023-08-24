import axios from 'axios';

const API_KEY = '2fa2ea9527bd9c62a21220c9ca13aea4';
const BASE_URL = 'https://api.themoviedb.org/3/';

export async function getTrendingDay() {
  const response = await axios.get(`${BASE_URL}trending/all/day`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data.results;
}

export async function getInfoMovieByID(movieID) {
  const response = await axios.get(`${BASE_URL}movie/${movieID}`, {
    params: {
      api_key: API_KEY,
    },
  });

  return response.data;
}

export async function getCastMovieByID(movieID) {
  const response = await axios.get(`${BASE_URL}movie/${movieID}/credits`, {
    params: {
      api_key: API_KEY,
    },
  });

  return response.data;
}
export async function getReviewMovieByID(movieID) {
  const response = await axios.get(`${BASE_URL}movie/${movieID}/reviews`, {
    params: {
      api_key: API_KEY,
    },
  });

  return response.data.results;
}

export async function getMovieByQuery(query) {
  const response = await axios.get(`${BASE_URL}search/movie?query=${query}`, {
    params: {
      api_key: API_KEY,
    },
  });

  return response.data.results;
}
