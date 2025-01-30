import PropTypes from "prop-types";
function HeroContentListStudent({ text }) {
  return (
    <li>
      <i className="fa-solid fa-check"></i>
      {text}
    </li>
  );
}

HeroContentListStudent.propTypes = {
  text: PropTypes.string.isRequired,
};

export default HeroContentListStudent;
