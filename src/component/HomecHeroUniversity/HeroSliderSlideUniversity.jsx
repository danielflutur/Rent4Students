import ProtoTypes from "prop-types";
import { Link } from "react-router-dom";

function HeroSliderSlideUniversity({
  link,
  img,
  price,
  pricePeriod,
  title,
  propertyText,
  propertyImg,
  propertyList,
}) {
  return (
    <div className="swiper-slide" style={{ marginBottom: "50px" }}>
      {/* Single property */}
      <Link to={link} className="homec-property homec-property__card">
        {/* Property Head */}
        <div className="homec-property__head">

          <img src={img} alt="#" />
        </div>
        {/* Property Body  */}
      </Link>
      {/* End Single property */}
    </div>
  );
}

HeroSliderSlideUniversity.propTypes = {
//  link: ProtoTypes.string.isRequired,
  img: ProtoTypes.string.isRequired,
//  price: ProtoTypes.string.isRequired,
//  pricePeriod: ProtoTypes.string.isRequired,
//  title: ProtoTypes.string.isRequired,
//  propertyText: ProtoTypes.string.isRequired,
//  propertyImg: ProtoTypes.string.isRequired,
//  propertyList: ProtoTypes.array.isRequired,
};

export default HeroSliderSlideUniversity;
