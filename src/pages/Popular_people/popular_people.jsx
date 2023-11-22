/* eslint-disable react/jsx-key */
import axios from "axios";
import { useEffect, useState } from "react";
import People_Card from "./People_Card";

export default function Famous() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://api.themoviedb.org/3/person/popular?language=en-US&page=1",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NmFiY2EyZGIyMjFiNzExOTQ4ZjVkMzMxMGYxZTZlMyIsInN1YiI6IjYyODhiZTgyN2Q1ZGI1MDA5OWQ0YmUyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4AUwyIfaAkxxW2EMGsJTuJmYuuqkXsfay8cKgNVbtsU",
      },
    }).then((res) => {
      console.log(res?.data?.results);
      setPeople(res?.data?.results);
    });
  }, []);

  return (
    <div className="container pb-5 pt-3">
      <h1 className="text-2xl font-bold pb-4">Popular People</h1>
      {people?.length > 0 ? (
        <>
          {
            <div className="grid grid-cols-5 gap-5">
              {people.map((item) => {
                return (
                  <div className="border col-span-1 shadow-md">
                    <People_Card PeopleObject={item} />
                  </div>
                );
              })}
            </div>
          }
        </>
      ) : (
        <>
          <h1>Loading...</h1>
        </>
      )}
    </div>
  );
}
