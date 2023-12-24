import { useRef } from "react";
import MovieListTitle from "./MovieListTitle";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import GptMoviesTitle from "./GptMoviesTitle";
const GptMovieContainer = () => {
  const scrollContainerNowPlaying = useRef();
  const movies = useSelector((state) => state.gpt?.gptSearchMovie);

  return (
    <div className="absolute top-40 w-full px-16 bg-slate-950">
      {movies &&
        movies.map((movie, index) => (
          <div key={index}>
            {console.log("movie", movie)}
            <GptMoviesTitle title={movies[index].title} />
            <div
              className="flex overflow-x-hidden p-4"
              ref={scrollContainerNowPlaying}
            >
              {movie.movies.map((movie, index) => (
                <div key={movie.id}>
                  {console.log("internal movie:", movie)}
                  {movie.backdrop_path && index < 5 && (
                    <MovieCard movies={movie} />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default GptMovieContainer;
