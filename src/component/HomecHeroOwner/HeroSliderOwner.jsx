import HeroSliderSlideOwner from "./HeroSliderSlideOwner";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsiveHeroSlider } from "../../utils/responsiveSlider";
import { CustomDot } from "../CustomDot/CustomDot";
function HeroSliderOwner() {
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
        <HeroSliderSlideOwner
          img="img/owner-slide-1.png"
        />
        <HeroSliderSlideOwner
          img="img/owner-slide-2.png"
        />
        <HeroSliderSlideOwner
          img="img/owner-slide-3.png"
        />
      </Carousel>

      {/* End Swiper Card Slider  */}
    </div>
  );
}

export default HeroSliderOwner;
