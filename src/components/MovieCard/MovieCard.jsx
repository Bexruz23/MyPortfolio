/* eslint-disable react/prop-types */

export default function MovieCard({ movie }) {
  return (
    <div>
      <div className="m-2 flex-none w-48  mr-8 md:pb-4 ">
        <img
          src={`https://www.themoviedb.org/t/p/w440_and_h660_face${movie.poster_path}`}
          alt=""
          className="w-full"
        />
        <div className="snap-always snap-center text-center flex-none w-[200px] counter">
          {Math.floor(movie.vote_average * 10)}
        </div>
        <div className="snap-always snap-center text-center flex-none w-[200px] movie_title">
          {movie.title || movie.original_name}
        </div>
        <div className="snap-always snap-center text-center flex-none w-[200px] movies_date">
          {movie.release_date || movie.first_air_date}
        </div>
      </div>
    </div>
  );
}
