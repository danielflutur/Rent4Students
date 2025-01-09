import ProtoTypes from "prop-types";
import { Link } from "react-router-dom";

function HeroSliderSlide({
  link,
  img,
  price,
  pricePeriod,
  title,
  propertyText,
  propertyImg,
}) {
  return (
    <div className="swiper-slide" style={{ marginBottom: "50px" }}>
      {/* Single property */}
      <Link to={link} className="homec-property homec-property__card">
        {/* Property Head */}
        <div className="homec-property__head">
          <div className="homec-overlay"></div>
          <img src={img} alt="#" />
        </div>
        {/* Property Body  */}
        <div className="homec-property__body">
          <div className="homec-property__body--inside">
            <div className="homec-property__price">
              ${price} <span>/{pricePeriod}</span>
            </div>
            <h3 className="homec-property__title">{title}</h3>
            <div className="homec-property__text">
              <img src={propertyImg} alt="#" />
              <p>{propertyText}</p>
            </div>
          </div>
        </div>
      </Link>
      {/* End Single property */}
    </div>
  );
}

HeroSliderSlide.propTypes = {
  link: ProtoTypes.string.isRequired,
  img: ProtoTypes.string.isRequired,
  price: ProtoTypes.string.isRequired,
  pricePeriod: ProtoTypes.string.isRequired,
  title: ProtoTypes.string.isRequired,
  propertyText: ProtoTypes.string.isRequired,
  propertyImg: ProtoTypes.string.isRequired,
};

export default HeroSliderSlide;
