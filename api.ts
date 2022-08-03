const API_KEY = "10923b261ba94d897ac6b81148314a3f";
const BASE_URL = "https://api.themoviedb.org/3";

export interface Movie {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface BaseResponse {
  page: number;
  total_results: number;
  total_pages: number;
}

export interface MovieResponse extends BaseResponse {
  results: Movie[];
}

export const moviesAPI = {
  trending: () =>
    fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`).then((res) =>
      res.json()
    ),
  upcoming: () =>
    fetch(
      `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
    ).then((res) => res.json()),
  nowPlaying: () =>
    fetch(
      `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1&region=KR`
    ).then((res) => res.json()),
  search: ({ queryKey }) => {
    const [_, query] = queryKey;
    console.log(query);
    return fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=1&region=KR&query=${query}`
    ).then((res) => res.json());
  },
};

export const tvAPI = {
  trending: () =>
    fetch(`${BASE_URL}/trending/tv/week?api_key=${API_KEY}`).then((res) =>
      res.json()
    ),
  airingToday: () =>
    fetch(
      `https://api.themoviedb.org/3/tv/airing_today?api_key=${API_KEY}&language=en-US&page=1`
    ).then((res) => res.json()),
  topRated: () =>
    fetch(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`
    ).then((res) => res.json()),
  search: ({ queryKey }) => {
    const [_, query] = queryKey;
    console.log(query);
    return fetch(
      `${BASE_URL}/search/tv?api_key=${API_KEY}&language=en-US&page=1&region=KR&query=${query}`
    ).then((res) => res.json());
  },
};
