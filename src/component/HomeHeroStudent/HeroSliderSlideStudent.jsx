import ProtoTypes from "prop-types";
import { Link } from "react-router-dom";

function HeroSliderSlideStudent({
  link,
  img,
}) {
  return (
    <div className="swiper-slide" style={{ marginBottom: "0px" }}>
      {/* Single property */}
      <Link to={link} className="homec-property homec-property__card">
        {/* Property Head */}
        <div className="homec-property__head_v2">
          <img src={img} alt="#" />
        </div>
        {/* Property Body  */}
      </Link>
      {/* End Single property */}
    </div>
  );
}

HeroSliderSlideStudent.propTypes = {
  img: ProtoTypes.string.isRequired,
};

export default HeroSliderSlideStudent;
