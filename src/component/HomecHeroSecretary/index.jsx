import HeroContentSecretary from "./HeroContentSecretary";
import HeroSliderSecretary from "./HeroSliderSecretary";

function HomecHeroSecretary() {
  return (
    <section
      id="hero"
      className="homec-hero-top"
      style={{ backgroundImage: `url(/img/Map.png)` }}
    >
      <div className="container">
        <div className="row align-items-top">
          <div className="col-12">
            <div className="homec-hero__inner-top">
              <HeroContentSecretary />
              <HeroSliderSecretary />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomecHeroSecretary;
