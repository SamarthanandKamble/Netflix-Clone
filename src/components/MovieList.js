import React, { useRef } from "react";
import MovieCard from "./MovieCard";
import MovieListTitle from "./MovieListTitle";
import { useSelector } from "react-redux";

const MovieList = () => {
  const movies = useSelector((state) => state.movie?.movieList);
  const popularMovies = useSelector((state) => state.movie?.popularMoviesList);
  const topRatedMovies = useSelector(
    (state) => state.movie?.topRatedMoviesList
  );

  const scrollContainerNowPlaying = useRef(null);
  const scrollContainerTopRated = useRef(null);
  const scrollContainerPopular = useRef(null);

  const handleNowPlayingScroll = (scrollAmount) => {
    if (scrollContainerNowPlaying.current) {
      scrollContainerNowPlaying.current.scrollLeft += scrollAmount;
    }
  };
  const handleTopRatedScroll = (scrollAmount) => {
    if (scrollContainerTopRated.current) {
      scrollContainerTopRated.current.scrollLeft += scrollAmount;
    }
  };
  const handlePopularScroll = (scrollAmount) => {
    if (scrollContainerPopular.current) {
      scrollContainerPopular.current.scrollLeft += scrollAmount;
    }
  };
  return (
    <div className="-mt-40 pl-8">
      <MovieListTitle title={"Now Playing"} onScroll={handleNowPlayingScroll} />
      <div
        className="flex overflow-x-hidden p-4"
        ref={scrollContainerNowPlaying}
      >
        {movies &&
          movies.map((movie) => (
            <div key={movie.id}>
              <MovieCard movies={movie} />
            </div>
          ))}
      </div>
      <MovieListTitle title={"Popular Movies"} onScroll={handlePopularScroll} />
      <div className="flex overflow-x-hidden p-4" ref={scrollContainerPopular}>
        {popularMovies &&
          popularMovies.map((movie) => (
            <div key={movie.id}>
              <MovieCard movies={movie} />
            </div>
          ))}
      </div>
      <MovieListTitle
        title={"Top Rated Movies"}
        onScroll={handleTopRatedScroll}
      />
      <div
        className="flex overflow-x-hidden p-4 "
        ref={scrollContainerTopRated}
      >
        {topRatedMovies &&
          topRatedMovies.map((movie) => (
            <div key={movie.id}>
              <MovieCard movies={movie} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default MovieList;
