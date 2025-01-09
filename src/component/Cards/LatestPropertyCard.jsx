import { Link, useNavigate } from "react-router-dom";

function LatestPropertyCard({
  id,
  title,
  rentPrice,
  surface,
  address,
  photos,
  classes,
  view,
  style,
}) {
  const navigate = useNavigate();

  return (
    <div
      className={` ${classes ? classes : "col-lg-4 col-md-6 col-12 mg-top-30"}`}
      data-aos="fade-up"
      data-aos-delay="800"
      style={style}
    >
      <div
        className={`homec-property ${
          view === "list" && "homec-property__list-style"
        }`}
      >
        <div className="homec-property__head listings-image">
          <img src={photos[0]} alt="#" />
        </div>
        <div className="homec-property__body">
          <div className="homec-property__topbar">
            <div className="homec-property__price">${rentPrice}</div>
            <span className="homec-property__salebadge">{surface}m</span>
          </div>
          <h3
            className="homec-property__title"
            onClick={() => navigate(`/property-single/${id}`)}
          >
            {title.length > 22 ? title : title}
          </h3>
          <div className="homec-property__text">
            <img src="img/location-icon.svg" alt="#" />
            <p>{address.streetAddress}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestPropertyCard;
