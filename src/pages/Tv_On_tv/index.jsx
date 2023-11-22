import axios from "axios";
import { useEffect, useState } from "react";

export default function Tv_on_tv() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NmFiY2EyZGIyMjFiNzExOTQ4ZjVkMzMxMGYxZTZlMyIsInN1YiI6IjYyODhiZTgyN2Q1ZGI1MDA5OWQ0YmUyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4AUwyIfaAkxxW2EMGsJTuJmYuuqkXsfay8cKgNVbtsU",
      },
    })
      .then((res) => {
        setdata(res?.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container pt-3">
      <div className="flex justify-between items-center pb-3">
        <div className="right_cards w-[100%] grid grid-cols-5 gap-4">
          {data?.length > 0 ? (
            data.map((item) => {
              return (
                <div
                  className="col-span-1 px-1 border-rounded bg-white border rounded  shadow-slate-700 pb-3"
                  key={item.id}
                >
                  <img
                    src={`https://www.themoviedb.org/t/p/w440_and_h660_face${item.poster_path}`}
                    alt=""
                    className="rounded"
                  />
                  {Math.floor(item.vote_average * 10)}
                  <p className="text-lg font-bold">{item.name}</p>
                  {item.release_date || item.first_air_date}
                </div>
              );
            })
          ) : (
            <h1>Loading...</h1>
          )}
        </div>
      </div>
    </div>
  );
}
