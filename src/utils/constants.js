import { BEARER_TOKEN } from "../api_key";

export const NETFLIX_LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const NETFLIX_WALLPAPER =
  "https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/c5af601a-6657-4531-8f82-22e629a3795e/IN-en-20231211-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOGUyMTkyM2M4NDZmOGNlOTE3OTdhZmIyODIwYmE5MSIsInN1YiI6IjY1ODNmZTY1ZTI5NWI0M2JjNzY4ZjExNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6JaZ3r5UdCG1rj42NAVVv4uwQW9tQXHVZnMR102KoJU",
  },
};

export const MOVIE_POSTER_CDN_URL = `https://image.tmdb.org/t/p/original`;
export const POPULAR_MOVIES_URL = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`;
export const TOP_RATED_MOVIES_URL = `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`;

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "marathi", name: "Marathi" },
];

export const OPEN_AI_KEY =
  "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";
