import axios from "axios";
import Sliderpage from "../../components/Slider/Sliderpage";
import { useEffect, useState } from "react";
import Carousel from "../../components/Kinolar/Carousel";
import MovieSlider from "../../components/MovieSlider";
import { free_to_watch, trendingTabs, wrapperpage } from "./utils";

export default function Home() {
  const [trending, setTrending] = useState([]);
  const [tab, setTab] = useState(trendingTabs[0].id);

  console.log(tab, "tabs");

  useEffect(() => {
    getMovie(tab).then((res) => setTrending(res));
  }, [tab]);

  const handleClick = (id) => {
    setTab(id);
  };

  return (
    <div>
      <Sliderpage />
      <Carousel onClick={handleClick} name={tab} data={trendingTabs} />
      <MovieSlider data={trending} />
      <Carousel onClick={handleClick} name={tab} data={wrapperpage} />
      <MovieSlider data={trending} />
      <Carousel onClick={handleClick} name={tab} data={free_to_watch} />
      <MovieSlider data={trending} />
    </div>
  );
}

function getMovie(name) {
  return axios({
    method: "GET",
    url: `https://api.themoviedb.org${name}`,
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NmFiY2EyZGIyMjFiNzExOTQ4ZjVkMzMxMGYxZTZlMyIsInN1YiI6IjYyODhiZTgyN2Q1ZGI1MDA5OWQ0YmUyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4AUwyIfaAkxxW2EMGsJTuJmYuuqkXsfay8cKgNVbtsU",
    },
  })
    .then((res) => {
      return res?.data.results;
    })
    .catch((err) => {
      console.log(err);
    });
}
