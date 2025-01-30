import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsiveHeroSlider } from "../../utils/responsiveSlider";
import { CustomDot } from "../CustomDot/CustomDot";
import HeroSliderSlideStudent from "./HeroSliderSlideStudent";
import ProfileStudent from "../Students/ProfileStudent";

function HeroSliderStudent() {
  return (
    <div className="homec-slider-property-slider">
      {/* Swiper Card Slider */}
      <Carousel
        responsive={responsiveHeroSlider}
        showDots={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        removeArrowOnDeviceType={[
          "superLargeDesktop",
          "desktop",
          "tablet",
          "mobile",
        ]}
        customDot={<CustomDot />}
      >
        <HeroSliderSlideStudent
          img="img/carusel_students_1.png"
        />
        <HeroSliderSlideStudent
          img="img/carusel_students_2.png"
        />
        <HeroSliderSlideStudent
          img="img/carusel_students_3.png"
        />
      </Carousel>

      {/* End Swiper Card Slider  */}
    </div>
  );
}

export default HeroSliderStudent;
