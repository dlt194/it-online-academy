import FilterMovies from "./FilterMovies";
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
  const [sortBy, setSortBy] = useState<"date" | "rating" | "">("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

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
    if (rating === givingRating) {
      setRating(0);
      applyFiltersAndSorting(0, sortBy, sortOrder);
    } else {
      setRating(rating);
      applyFiltersAndSorting(rating, sortBy, sortOrder);
    }
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as "date" | "rating" | "";
    setSortBy(value);
    applyFiltersAndSorting(givingRating, value, sortOrder);
  };

  const handleOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as "asc" | "desc";
    setSortOrder(value);
    applyFiltersAndSorting(givingRating, sortBy, value);
  };

  const applyFiltersAndSorting = (
    rating: number,
    sortKey: typeof sortBy,
    order: typeof sortOrder
  ) => {
    let filtered = [...allMoviesFiltered];

    // Apply rating filter
    if (rating > 0) {
      filtered = filtered.filter((movie) => movie.vote_average >= rating);
    }

    // Apply sorting
    if (sortKey === "date") {
      filtered.sort((a, b) => {
        const dateA = new Date(a.release_date).getTime();
        const dateB = new Date(b.release_date).getTime();
        return order === "asc" ? dateA - dateB : dateB - dateA;
      });
    } else if (sortKey === "rating") {
      filtered.sort((a, b) =>
        order === "asc"
          ? a.vote_average - b.vote_average
          : b.vote_average - a.vote_average
      );
    }

    setMovies(filtered);
  };
  return (
    <section className="bg-linear-to-br from-gray-900 to-gray-600 text-white shadow-md min-h-screen">
      <header className="px-2.5 py-8 justify-between mb-1">
        <h2 className="flex items-center text-white text-2xl ">Popular</h2>
        <div className="flex items-center">
          <FilterMovies
            givingRating={givingRating}
            handleFilter={handleFilter}
            ratings={[8, 7, 6]}
          />
          <select
            className="bg-gray-800 text-white border border-gray-600 rounded px-3 py-2 mx-2 my-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
            value={sortBy}
            onChange={handleSortChange}
          >
            <option value="">Sort By</option>
            <option value="date">Date</option>
            <option value="rating">Rating</option>
          </select>

          <select
            className="bg-gray-800 text-white border border-gray-600 rounded px-3 py-2 mx-2 my-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
            value={sortOrder}
            onChange={handleOrderChange}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
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
