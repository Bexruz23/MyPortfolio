/* eslint-disable react/prop-types */
import MovieCard from "../MovieCard/MovieCard";

const MovieSlider = ({ data }) => {
  return (
    <div className="container">
      <div className="flex overflow-x-auto scroll-smooth snap-mandatory  bg-[url('https://www.themoviedb.org/assets/2/v4/misc/trending-bg-39afc2a5f77e31d469b25c187814c0a2efef225494c038098d62317d923f8415.svg')] bg-no-repeat bg-bottom">
        {data && data?.length > 0 ? (
          <>
            {data.map((item) => (
              <div key={item.id}>
                <MovieCard movie={item} />
              </div>
            ))}
          </>
        ) : (
          <>
            <h1>Loading... </h1>
          </>
        )}
      </div>
    </div>
  );
};

export default MovieSlider;
