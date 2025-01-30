import ProtoTypes from "prop-types";
import { Link } from "react-router-dom";
import CompatibilityBar from "./CompatibilityBar";

function StudentCardV2({ img, propertiesLink, name, campatibility, position, detailsLink }) {
  return (
    <div
      className="col-lg-4 col-md-6 col-12 mg-top-30"
      data-aos="fade-in"
      data-aos-delay="900"
    >
      <div className="homec-agent homec-agent__v2">
        <div className="homec-agent__head">
          <img src={img} alt="#" />
        </div>
        <div className="homec-agent__body">
          <Link className="homec-agent__body--btn" to={detailsLink}>
            Vezi Profilul
          </Link>
          <CompatibilityBar compatibility={campatibility} />
          <h4 className="homec-agent__title">
            <Link to={detailsLink}>
              {name}
              <span>{detailsLink}</span>
            </Link>
          </h4>
        </div>
      </div>
    </div>
  );
}

StudentCardV2.propTypes = {
  img: ProtoTypes.string.isRequired,
  propertiesLink: ProtoTypes.string.isRequired,
  campatibility:  ProtoTypes.string.isRequired,
  name: ProtoTypes.string.isRequired,
  position: ProtoTypes.string.isRequired,
  detailsLink: ProtoTypes.string.isRequired,
};

export default StudentCardV2;
