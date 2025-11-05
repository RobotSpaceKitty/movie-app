//rafce - React Arrow Function Component Export
import { useState, useEffect } from "react";
import Search from "./components/Search";
import Spinner from "./components/Spinner";
import MovieCard from "./components/MovieCard";
import { useDebounce } from "react-use";
import { getTrendingMovies, updateSearchCount } from "./appwrite";


//TMDB API configuration
const API_BASE_URL = "https://api.themoviedb.org/3";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

const App = () => {
  //state variables
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setdebouncedSearchTerm] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [movieList, setMovieList] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);

  //debounce search term input to prevent excessive API calls
  useDebounce(() => setdebouncedSearchTerm(searchTerm), 700, [searchTerm]);

  const fetchMovies = async (query = "") => {
    //turn on loading, error response handler
    setIsLoading(true);
    setErrorMessage("");

    try {
      //fetch movie data from API
      const endpoint = query
        ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
        : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

      const response = await fetch(endpoint, API_OPTIONS);
      //check for response status
      if (!response.ok) {
        throw new Error(`Failed to fetch movies`);
      }

      //parse JSON data
      const data = await response.json();
      //handle API error response
      if (data.Response === "False") {
        setErrorMessage(data.Error) || "Failed to fetch movies";
        setMovieList([]);
        return;
      }

      //update movie list state
      setMovieList(data.results || []);
      //console.log(data);

      if (query && data.results.length > 0) {
        await updateSearchCount(query, data.results[0]);
      }
    } catch (error) {
      console.error(`Error fetching movies: ${error}`);
      setErrorMessage("Failed to fetch movies. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const loadTrendingMovies = async () => {
    try {
      const movies = await getTrendingMovies();

      setTrendingMovies(movies);
    } catch (error) {
      console.error(`Error fetching trending movies: ${error}`);
    }
  };

  //fetch movies on component mount
  useEffect(() => {
    fetchMovies(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  useEffect(() => {
    loadTrendingMovies();
  }, []);

  return (
    <main>
      <div className="pattern" />
      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="Hero Banner" />
          <h1>
            Find <span className="text-gradient">Movies</span> You'll Enjoy
            Without the Hastle
          </h1>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>

        {trendingMovies.length > 0 && (
          <section className="trending">
            <h2 className="">Trending Movies</h2>
            <ul>
              {trendingMovies.map((movie, index) => (
                console.log(movie),
                <li key={movie.$id}>
                  <p className="text-white text-6xl">{index + 1}</p>
                  <img src={movie.poster_url} alt={movie.searchTerm} />
                  <h3 className="text-sm font-bold mt-2 text-light-200 capitalize" numberoflines={2}>{movie.searchTerm}</h3>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="all-movies">
          <h2 className="mt-[40px]">All Movies</h2>
          {/* Conditional rendering based on loading and error states */}
          {isLoading ? (
            <Spinner />
          ) : errorMessage ? (
            <p className="text-red-500">{errorMessage}</p>
          ) : (
            <ul>
              {/* Map through movie list and render MovieCard components */}
              {movieList.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
};

export default App;
