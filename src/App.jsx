import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Rootpage from "./pages/Rootpage";
import Popular from "./pages/popular";
import Home from "./pages/home";
import SubRootPage from "./components/subRootPage";
import Upcoming from "./pages/upcoming";
import Playing from "./pages/Now_playing";
import Rated from "./pages/Top_rated";
import Famous from "./pages/Popular_people/popular_people";
import Tv_show_polular from "./pages/Tv_show_polular";
import Airing_today from "./pages/Tv_airing_today";
import Tv_on_tv from "./pages/Tv_On_tv";
import Tv_top_rated from "./pages/Tv_top_rated";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootpage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "popular_people",
        element: <Famous />,
      },
      {
        path: "popular",
        element: <SubRootPage />,
        children: [
          {
            index: true,
            element: <Popular />,
          },
          {
            path: "upcoming",
            element: <Upcoming />,
          },
          {
            path: "now_playing",
            element: <Playing />,
          },
          {
            path: "top_rated",
            element: <Rated />,
          },
        ],
      },
      {
        path: "tv_show_popular",
        element: <SubRootPage />,
        children: [
          {
            index: true,
            element: <Tv_show_polular />,
          },
          {
            path: "airing_today",
            element: <Airing_today />,
          },
          {
            path: "on_tv",
            element: <Tv_on_tv />,
          },
          {
            path: "tv_shows_top_rated",
            element: <Tv_top_rated />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
