import ProtoTypes from "prop-types";

function WelcomeCardLogin({image}) {
  return (
    <div className="col-lg-6 col-12 d-none d-lg-block ">
      <div
        className="ecom-wc__inner homec-bg-cover"
        style={{ backgroundImage: "url('img/welcome-bg.svg')" }}
      >
        {/* Logo  */}
        <div className="ecom-wc__logo">
          <a href="/">
            <img src="img/welcome-logo.png" alt="#" />
          </a>
        </div>
        <div className="ecom-wc__inside">
          {/* Middle Image  */}
          <div className="ecom-wc__middle">
            <a href="/">
              <img src={image} alt="#" />
            </a>
          </div>
          
        </div>
      </div>
    </div>
  );
}

WelcomeCardLogin.propTypes = {
  image: ProtoTypes.string.isRequired,
};

export default WelcomeCardLogin;
