import Prototype from "prop-types";
import { Link } from "react-router-dom";

function RoleCard({ img, role, info, btn, link }) {
  return (
    <div
      className="col-lg-3 col-md-6 col-16 mg-top-30"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      {/* Homec Add Property Card  */}
      <div className="role-card">
        {/* Homec Property Image   */}
        <div className="role-card__img">
          <img src={img} alt="#" />
        </div>
        {/* Homec Property Content   */}
        <div className="role-card__content">
          <h3 className="role-card__title"> {role}</h3>
          <p className="role-card__text"> {info}</p>
          <div className="role-card__button">
            <Link
              to={link}
              className="homec-btn"
            >
              <span>Sign Up</span>
            </Link>
          </div>
        </div>
      </div>
      {/* End Homec Add Property Card  */}
    </div>
  );
}

RoleCard.propTypes = {
  img: Prototype.string.isRequired,
  role: Prototype.string.isRequired,
  info: Prototype.string.isRequired,
  btn: Prototype.string,
  link: Prototype.string.isRequired,
};

export default RoleCard;
