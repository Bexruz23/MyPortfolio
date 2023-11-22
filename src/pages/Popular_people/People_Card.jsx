/* eslint-disable no-undef */
/* eslint-disable react/prop-types */

export default function People_Card({ PeopleObject }) {
  const moviename = PeopleObject.known_for.map((movie) => {
    return `${movie.original_title}`;
  });
  console.log(moviename);
  return (
    <div className="">
      <img
        src={`https://www.themoviedb.org/t/p/w470_and_h470_face/${PeopleObject.profile_path}`}
        alt=""
      />
      <b>{PeopleObject.name}</b>
      <p className="text-[13px] text-neutral-800 tracking-wider">
        {moviename.join().slice(0, 25)}
      </p>
    </div>
  );
}
