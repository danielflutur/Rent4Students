import { responsiveSmallAgentsSlider } from "../../utils/responsiveSlider";
import ImageCard from "../Cards/ImageCard";
import Carousel from "react-multi-carousel";

function SingleSlider({property}) {
  return (
    <Carousel
      responsive={responsiveSmallAgentsSlider}
      infinite={true}
      autoPlay={true}
      showDots={false}
      customTransition="linear .5"
      autoPlaySpeed={3000}
      removeArrowOnDeviceType={[
        "superLargeDesktop",
        "desktop",
        "tablet",
        "mobile",
      ]}
    >
      {property.photos.map((photo, index) => (
        <ImageCard
        key={index}
        price={property.rentPrice}
        duration="Month"
        title={property.title}
        text={property.address.addressDetails}
        img={photo}
      />
      ))}
     
    </Carousel>
  );
}

export default SingleSlider;
