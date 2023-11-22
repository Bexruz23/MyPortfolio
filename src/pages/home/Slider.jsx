/* eslint-disable react/prop-types */
import Carousel from "../../components/Kinolar/Carousel";

const Slider = ({ getToday, getThisWeek, data }) => {
  return (
    <>
      <Carousel handle1={getToday} handle2={getThisWeek} />
      
    </>
  );
};

export default Slider;
