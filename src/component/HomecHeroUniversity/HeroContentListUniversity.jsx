import PropTypes from "prop-types";
function HeroContentListUniversity({ text }) {
  return (
    <li>
      <i className="fa-solid fa-check"></i>
      {text}
    </li>
  );
}

HeroContentListUniversity.propTypes = {
  text: PropTypes.string.isRequired,
};

export default HeroContentListUniversity;
