import WatchMovies from "./WatchMovies";
import { useEffect, useState } from "react";

interface Genre {
  id: number;
  name: string;
}

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  genre_ids: number[];
}

const Movies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [genres, setGenres] = useState<Record<number, string>>({});
  const [givingRating, setRating] = useState(0);
  const [allMoviesFiltered, setAllMoviesFiltered] = useState<Movie[]>([]);

  useEffect(() => {
    fetchMovies();
    fetchGenres();
  }, []);

  const fetchMovies = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${
        import.meta.env.VITE_TMDB_API_KEY
      }`
    );
    const data = await res.json();
    setMovies(data.results);
    setAllMoviesFiltered(data.results);
  };

  const fetchGenres = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${
        import.meta.env.VITE_TMDB_API_KEY
      }`
    );
    const data = await res.json();

    // Convert array → dictionary { id: name }
    const genreMap: Record<number, string> = {};
    data.genres.forEach((g: Genre) => {
      genreMap[g.id] = g.name;
    });

    setGenres(genreMap);
  };

  const handleFilter = (rating: number) => {
    if (rating == givingRating) {
      setRating(0);
      setMovies(allMoviesFiltered);
    } else {
      setRating(rating);
      const filteredMovies = allMoviesFiltered.filter(
        (movie) => movie.vote_average >= rating
      );
      setMovies(filteredMovies);
    }
  };
  return (
    <section className="bg-linear-to-br from-gray-900 to-gray-600 text-white shadow-md min-h-screen">
      <header className="px-2.5 py-8 justify-between mb-1">
        <h2 className="flex items-center text-white text-2xl ">Popular</h2>
        <div className="flex items-center">
          <ul className="flex items-center list-none text-sm">
            <li
              className={`px-2 pt-4 cursor-pointer ${givingRating === 8 ? "underline" : ""}`}
              onClick={() => handleFilter(8)}
            >
              8+
            </li>
            <li
              className={`px-2 pt-4 cursor-pointer ${givingRating === 7 ? "underline" : ""}`}
              onClick={() => handleFilter(7)}
            >
              7+
            </li>
            <li
              className={`px-2 pt-4 cursor-pointer ${givingRating === 6 ? "underline" : ""}`}
              onClick={() => handleFilter(6)}
            >
              6+
            </li>
          </ul>
          <select
            className="border-none outline-none font-sm h-8 px-0 py-1 mx-0 my-3"
            name=""
            id=""
          >
            <option value="">Sort By</option>
            <option value="">Date</option>
            <option value="">Rating</option>
          </select>
          <select
            className="border-none outline-none font-sm h-8 px-0 py-1 mx-0 my-3"
            name=""
            id=""
          >
            <option value="">Ascending</option>
            <option value="">Descending</option>
          </select>
        </div>
      </header>
      <div className="flex flex-wrap justify-evenly">
        {movies.length > 0 ? (
          movies.map((movie) => <WatchMovies movie={movie} genres={genres} />)
        ) : (
          <p className="text-xl text-red-600">No Movies Found</p>
        )}
      </div>
    </section>
  );
};

export default Movies;
