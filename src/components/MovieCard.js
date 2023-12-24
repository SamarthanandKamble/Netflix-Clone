import { MOVIE_POSTER_CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPosterMovie } from "../utils/Redux/youtubeSlice";
import { Link } from "react-router-dom";
const MovieCard = ({ movies }) => {
  const dispatch = useDispatch();
  const {
    poster_path,
    title,
    id,
    release_date,
    popularity,
    vote_average,
    overview,
  } = movies;

  const handlePosterClick = () => {
    dispatch(
      addPosterMovie({
        title,
        id,
        release_date,
        popularity,
        vote_average,
        overview,
      })
    );
  };
  return (
    <div className="w-36 h-40 transform hover:scale-110 transition-transform duration-75 ease-in-out">
      <Link to={"/watch"}>
        <img
          src={`${MOVIE_POSTER_CDN_URL}${poster_path}`}
          alt={title}
          className="w-full h-full p-2"
          onClick={handlePosterClick}
        />
      </Link>
    </div>
  );
};

export default MovieCard;
