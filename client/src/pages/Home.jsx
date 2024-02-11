import Carousel from "../components/slider";
import Slider from "../components/explore";
import CardStyle from "../components/card";
import CategoryStyle from "../components/categories";
import LauncheStyle from "../components/launches";
import Invoice from "../components/invoice";
import LifeStyle from "../components/lifestyle";
import BoatStyle from "../components/boat";
import BlogStyle from "../components/blog";
import PressSlide from "../components/press";
import TribeSlider from "../components/tribe";

const Home = () => {
  return (
    <>
      <Carousel />
      <Slider />
      <CardStyle />
      <CategoryStyle />
      <LauncheStyle />
      <Invoice />
      <LifeStyle />
      <BoatStyle />
      <TribeSlider/>
      <BlogStyle />
      <PressSlide />
    </>
  );
};

export default Home;
