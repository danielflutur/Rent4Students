import PropTypes from "prop-types";
function HeroContentListSecretary({ text }) {
  return (
    <li>
      <i className="fa-solid fa-check"></i>
      {text}
    </li>
  );
}

HeroContentListSecretary.propTypes = {
  text: PropTypes.string.isRequired,
};

export default HeroContentListSecretary;
