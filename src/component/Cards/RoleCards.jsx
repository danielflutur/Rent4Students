import Prototype from "prop-types";
import { Link } from "react-router-dom";

function RoleCard({ img, role, btn, link }) {
  return (
    <div
      className="col-lg-3 col-md-6 col-12 mg-top-30"
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
          <p className="role-card__text">
            info text
          </p>
          <div className="role-card__button">
            <Link
              to={link}
              className={
                btn !== "second" ? "homec-btn" : "homec-btn homec-btn__second"
              }
            >
              <span>Sign Up {role}</span>
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
  btn: Prototype.string,
  link: Prototype.string.isRequired,
};

export default RoleCard;
