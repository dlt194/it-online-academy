interface FilterMoviesProps {
  givingRating: number;
  handleFilter: (rating: number) => void;
  ratings: number[];
}

const FilterMovies = ({
  givingRating,
  handleFilter,
  ratings,
}: FilterMoviesProps) => {
  return (
    <ul className="flex items-center list-none text-sm">
      {ratings.map((rating) => (
        <li
          key={rating}
          className={`px-2 pt-4 cursor-pointer ${givingRating === rating ? "underline" : ""}`}
          onClick={() => handleFilter(rating)}
        >
          {rating}+
        </li>
      ))}
    </ul>
  );
};

export default FilterMovies;
