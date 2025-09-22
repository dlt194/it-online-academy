interface WatchMoviesProps {
  movie: {
    id: number;
    title: string;
    poster_path: string;
    release_date: string;
    vote_average: number;
    genre_ids: number[];
  };
  genres: Record<number, string>;
}

const WatchMovies = ({ movie, genres }: WatchMoviesProps) => {
  return (
    <div className="flex flex-wrap justify-center">
      <a
        key={movie.id}
        href={`https://www.themoviedb.org/movie/${movie.id}`}
        className="w-72 h-96 m-3 overflow-hidden rounded-xl bg-gray-900 text-white relative shadow-lg hover:scale-105 transition"
        target="_blank"
      >
        <img
          className="w-full h-3/4 object-cover"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="absolute bottom-0 w-full p-3 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
          <h3 className="text-lg font-semibold">{movie.title}</h3>
          <div className="flex justify-between items-center text-sm font-bold">
            <p>{movie.release_date}</p>
            <p className="flex items-center">
              {movie.vote_average.toFixed(1)}
              <img className="w-5 h-5 ml-1" src="/rating.jpg" alt="rating" />
            </p>
          </div>
          <p className="text-xs italic mt-1">
            {movie.genre_ids.map((id) => genres[id]).join(", ")}
          </p>
        </div>
      </a>
    </div>
  );
};

export default WatchMovies;
