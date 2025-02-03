import PropTypes from "prop-types";
function HeroContentListOwner({ text }) {
  return (
    <li>
      <i className="fa-solid fa-check"></i>
      {text}
    </li>
  );
}

HeroContentListOwner.propTypes = {
  text: PropTypes.string.isRequired,
};

export default HeroContentListOwner;
