import HeroSliderSlide from "./HeroSliderSlide";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsiveHeroSlider } from "../../utils/responsiveSlider";
import { CustomDot } from "../CustomDot/CustomDot";
import { useContext } from "react";
import { ListingsContext } from "../../context/ListingsProvider";

function HeroSlider() {
  const listings = useContext(ListingsContext);

  return (
    <div className="homec-slider-property-slider">
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
        {listings.slice(0, 3).map((listing) => {
          return (
            <HeroSliderSlide
              key={listing.id}
              link={`property-single/${listing.id}`}
              img={listing.photos[0]}
              price={`${listing.rentPrice}`}
              pricePeriod="month"
              title={listing.title}
              propertyText={listing.address.addressDetails}
              propertyImg="/img/location-icon2.svg"
            />
          );
        })}
      </Carousel>
    </div>
  );
}

export default HeroSlider;
