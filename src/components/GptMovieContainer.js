import { useRef } from "react";
import MovieListTitle from "./MovieListTitle";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
const GptMovieContainer = () => {
  const scrollContainerNowPlaying = useRef();
  const movies = useSelector((state) => state.gpt?.gptSearchMovie);

  const handleNowPlayingScroll = (scrollAmount) => {
    if (scrollContainerNowPlaying.current) {
      scrollContainerNowPlaying.current.scrollLeft += scrollAmount;
    }
  };
  return (
    <div className="absolute top-40 w-full p-8 bg-black">
      {movies &&
        movies.map((movie, index) => (
          <div key={index}>
            {console.log("movie", movie)}
            <MovieListTitle
              title={movies[index].title}
              onScroll={handleNowPlayingScroll}
            />
            <div
              className="flex overflow-x-hidden p-4"
              ref={scrollContainerNowPlaying}
            >
              {movie.movies.map((movie,index) => (
                <div key={movie.id}>
                  {console.log("internal movie:", movie)}
                  {movie.backdrop_path && index<5 && <MovieCard movies={movie} />}
                </div>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default GptMovieContainer;
