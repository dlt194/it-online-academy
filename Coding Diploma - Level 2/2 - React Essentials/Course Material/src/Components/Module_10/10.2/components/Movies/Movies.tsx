import WatchMovies from "./WatchMovies";

const Movies = () => {
  return (
    <section className="bg-linear-to-br from-gray-900 to-gray-600 text-white shadow-md min-h-screen">
      <header className="px-2.5 py-8 justify-between mb-1">
        <h2 className="flex items-center text-white text-2xl ">Popular</h2>
        <div className="flex items-center">
          <ul className="flex items-center list-none text-sm">
            <li className="px-2 pt-4 cursor-pointer">8+</li>
            <li className="px-2 pt-4 cursor-pointer">7+</li>
            <li className="px-2 pt-4 cursor-pointer">6+</li>
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
        <WatchMovies />
      </div>
    </section>
  );
};

export default Movies;
