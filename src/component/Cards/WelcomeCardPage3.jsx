import PropTypes from "prop-types";

function WelcomeCardPage3({ languages, links, image, brunches, builtHouse }) {
  return (
    <div className="ecom-wc__inner homec-bg-cover" style={{ backgroundImage: "url('img/welcome-bg.svg')" }}>
      {/* Logo */}
      <div className="ecom-wc__logo">
        <a href="/">
          <img src="img/welcome-logo.svg" alt="#" />
        </a>
      </div>
      <div className="ecom-wc__inside">
        {/* Middle Image */}
        <div className="ecom-wc__middle">
          <a href="/">
            <img src={image} alt="#" />
          </a>
        </div>
        <div className="ecom-wc__footer">
          <ul className="ecom-wc__footer--list list-none">
            {links?.map((link) => (
              <li key={link.name}>
                <a href={link.link}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

WelcomeCardPage3.propTypes = {
  languages: PropTypes.array.isRequired,
  links: PropTypes.array.isRequired,
  image: PropTypes.string.isRequired,
  brunches: PropTypes.string.isRequired,
  builtHouse: PropTypes.string.isRequired,
};

export default WelcomeCardPage3;
