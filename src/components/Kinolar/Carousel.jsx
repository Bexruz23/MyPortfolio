/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import "./carousel.css";

export default function Carousel({ onClick, tab, data }) {
  console.log(tab, "tab");
  return (
    <div className="container flex items-center mt-3">
      <h1 className="text-3xl pr-4">Trending</h1>
      {data.map((item) => (
        <div key={item.id} className="btns">
          <div
            className={
              item.id === tab ? "active btnn-left" : "active btnn-right"
            }
          ></div>
          <button onClick={() => onClick(item.id)} className="btnn">
            {item.name}
          </button>
        </div>
      ))}
    </div>
  );
}
