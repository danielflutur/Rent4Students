import ProtoTypes from "prop-types";
import { Link } from "react-router-dom";
import "../ListingSliderSlide/ListingSliderSlide.css"

function ListingSliderSlide({
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
      <Link to={link} className="listing-property listing-property__card">
        {/* Property Head */}
        <div className="listing-property__head">
          <div className="listing-overlay"></div>
          <img src={img} alt="#" />
        </div>
        {/* Property Body  */}
        <div className="listing-property__body">
          <div className="listing-property__body--inside">
            <div className="listing-property__price">
              ${price} <span>/{pricePeriod}</span>
            </div>
            <h3 className="listing-property__title">{title}</h3>
            <div className="listing-property__text">
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

ListingSliderSlide.propTypes = {
  link: ProtoTypes.string.isRequired,
  img: ProtoTypes.string.isRequired,
  price: ProtoTypes.string.isRequired,
  pricePeriod: ProtoTypes.string.isRequired,
  title: ProtoTypes.string.isRequired,
  propertyText: ProtoTypes.string.isRequired,
  propertyImg: ProtoTypes.string.isRequired,
};

export default ListingSliderSlide;
