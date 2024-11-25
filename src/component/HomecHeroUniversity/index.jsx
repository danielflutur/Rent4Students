import HeroContentUniversity from "./HeroContentUniversity";
import HeroSliderUniversity from "./HeroSliderUniversity";

function HomecHeroUniversity() {
  return (
    <section
      id="hero"
      className="homec-hero homec-hero__v2 p-relative"
      style={{ backgroundImage: `url(/img/Map.png)` }}
    >
      <div className="container">
        <div className="row align-items-top">
          <div className="col-12">
            <div className="homec-hero__inner homec-hero__inner--v2">
              <HeroContentUniversity />
              <HeroSliderUniversity />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomecHeroUniversity;
