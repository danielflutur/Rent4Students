import Carousel from "react-multi-carousel";
import ThumbnilsCard from "../Cards/ThumbnilsCard";
import { responsiveLogoSlider2 } from "../../utils/responsiveSlider";
import ButtonGroup from "../CustomDot/CustomArrow";

function ThumbnailsSlider({photos}) {
  return (
    <div className="mg-top-10">
      <Carousel
        responsive={responsiveLogoSlider2}
        showDots={false}
        infinite={true}
        arrows={false}
        customButtonGroup={<ButtonGroup />}
      >
        {photos.map((photo, index) => (
          <ThumbnilsCard
          key={index}
          img={photo} />
        ))}
      </Carousel>
    </div>
  );
} 

export default ThumbnailsSlider;
