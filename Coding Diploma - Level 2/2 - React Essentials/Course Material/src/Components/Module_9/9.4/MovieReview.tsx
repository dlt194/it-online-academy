import Header from "./components/Header/Header";
import Movies from "./components/Movies/Movies";

const MovieReview = () => {
  return (
    <div className="font-montserrat">
      <Header />
      <main>
        <Movies />
      </main>
    </div>
  );
};

export default MovieReview;
