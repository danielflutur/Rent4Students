import ProtoTypes from "prop-types";

function WelcomeCardOwner({ languages, links, image, brunches, builtHouse }) {
  return (
    <div className="col-lg-6 col-12 d-none d-lg-block ">
      <div
        className="ecom-wc__inner homec-bg-cover"
        style={{ backgroundImage: "url('img/welcome-bg.svg')" }}
      >
        {/* Logo  */}
        <div className="ecom-wc__logo">
          <a href="/">
            <img src="img/welcome-logo.svg" alt="#" />
          </a>
        </div>
        <div className="ecom-wc__inside">
          {/* Middle Image  */}
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
    </div>
  );
}

WelcomeCardOwner.propTypes = {
  languages: ProtoTypes.array.isRequired,
  links: ProtoTypes.array.isRequired,
  image: ProtoTypes.string.isRequired,
  brunches: ProtoTypes.string.isRequired,
  builtHouse: ProtoTypes.string.isRequired,
};

export default WelcomeCardOwner;
