import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}
const MovieDetails = () => {
  const { imdbID } = useParams<{ imdbID: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleAccordian = () => { 
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(
          `http://www.omdbapi.com/?i=${imdbID}&apikey=263d22d8`
        );
        if (response.status === 200) {
          setMovie(response.data);
        } else {
          console.log("Error fetching movie");
        }
      } catch (error) {
        console.log(error);
      }
    };
    if (imdbID) {
      fetchMovie();
    }
  }, [imdbID]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-slate-300 p-10 grid grid-cols-1 md:grid-cols-2 font-consolas">
      <div className="text-md-start md:order-1 order-2 pl-10">
        <h1 className="pt-5 text-5xl">{movie.Title}</h1>
        <p className="pt-5">
          <span className="font-bold">Year:</span> {movie.Year}
        </p>
        <p className="pt-5 capitalize">
          <span className="font-bold">Type:</span> {movie.Type}
        </p>

        <button onClick={toggleAccordian} className="mt-5 bg-blue-400 p-3">
          {isOpen ? "Hide Plot" : "Show Plot"}
        </button>
        {isOpen && (
          <div className="">
            <p className="text-start text-lg pt-5 font-bold">
              Oppenheimer was adapted by Nolan from a Pulitzer Prize-winning
              biography of Oppenheimer by Kai Bird and Martin Sherwin, American
              Prometheus: The Triumph and Tragedy of J. Robert Oppenheimer
              (2005). The film concerns itself primarily with the apparent
              conflicts influencing Oppenheimer’s motivations and how he and the
              world grappled with his legacy. It weaves a story across multiple
              time periods, following Oppenheimer (Cillian Murphy) from his
              university study to his directorship of the Los Alamos Laboratory
              during the Manhattan Project. These scenes are interspersed with
              depictions of a government hearing during the 1950s, in which
              Oppenheimer is forced to defend himself against challenges to his
              loyalty and patriotism, and a Senate confirmation hearing for
              Lewis Strauss (Robert Downey, Jr.), an antagonist of Oppenheimer
              who had been nominated to become U.S. secretary of commerce.
            </p>
          </div>
        )}
      </div>

      <div className="flex justify-center items-start md:order-2 order-1">
        <img src={movie.Poster} className="rounded-xl shadow-2xl h-auto" />
      </div>
    </div>
  );
};

export default MovieDetails;
