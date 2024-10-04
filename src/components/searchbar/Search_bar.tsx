import axios from "axios";
import { useState, useEffect } from "react";
import debounce from "lodash.debounce";

interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

interface SearchBarProps {
  onResults: (results: Movie[]) => void;
}

export const Search_bar: React.FC<SearchBarProps> = ({ onResults }) => {
  const [searchItem, setSearchItem] = useState("");
  const [debouncedSearchItem, setDebouncedSearchItem] = useState(searchItem);

  // Debounced function to fetch data
  const fetchMovies = debounce(async (query: string) => {
    if (!query) return;

    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?s=${query}&apikey=263d22d8`
      );
      onResults(response.data.Search || []);
    } catch (error) {
      console.log(error);
      onResults([]);
    }
  }, 300); // Debounce delay of 300ms

  useEffect(() => {
    fetchMovies(debouncedSearchItem);
  }, [debouncedSearchItem, fetchMovies]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchItem(e.target.value);
    setDebouncedSearchItem(e.target.value); // Update the debounced search term
  };

  return (
    <form className="flex justify-center p-10">
      <input
        type="text"
        placeholder="Search..."
        value={searchItem}
        onChange={handleInputChange}
        className="px-4 py-2 rounded-md text-gray-700"
      />
    </form>

    
  );
};
