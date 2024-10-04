import { useState } from "react";
import { Search_bar } from "../../components/searchbar/Search_bar" 
import Card from "../../components/card/Card";

interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}
const Home = () => {
  const [results, setResults] = useState<Movie[]>([]);

  const handleResults = (data: Movie[]) => { 
    console.log(data);
    setResults(data);
  }
  return (
    <div className=" ">
      <Search_bar onResults={handleResults} />
      <div className="container mx-auto p-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">

          {results.map((movie) => (
            <Card key={movie.imdbID} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}



export default Home