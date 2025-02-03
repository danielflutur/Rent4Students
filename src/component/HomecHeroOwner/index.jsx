import HeroContentOwner from "./HeroContentOwner";
import HeroSliderOwner from "./HeroSliderOwner";

function HomecHeroOwner() {
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
              <HeroContentOwner />
              <HeroSliderOwner />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomecHeroOwner;
