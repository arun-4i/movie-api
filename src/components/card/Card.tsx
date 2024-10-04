import { Link } from "react-router-dom";

interface CardProps {
  movie: {
    imdbID: string;
    Poster: string;
    Title: string;
  };
}

const Card: React.FC<CardProps> = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.imdbID}`} className="group">
      <div
        key={movie.imdbID}
        className="relative rounded-lg overflow-hidden border border-gray-200 shadow-md transition-transform duration-300 transform hover:scale-105 group"
      >
        <div className="relative" style={{ paddingBottom: "56.25%" }}>
          {/* 16:9 aspect ratio box */}
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="absolute w-full h-full object-cover object-top"
          />

          <div className="absolute inset-0 flex items-end justify-center p-4 transition-all duration-300 group-hover:translate-y-0 group-hover:bg-black group-hover:text-white group-hover:opacity-70 opacity-0 bg-gray-800 text-gray-300">
            <h3 className="text-lg font-bold">{movie.Title}</h3>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
