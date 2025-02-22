import ListingHeroSlider from "../ListingHeroSlider/ListingHeroSlider";
import HeroContent from "./HeroContent";

function HomecHero() {
  return (
    <section
      id="hero"
      className="homec-hero homec-hero__v2 "
      style={{ backgroundImage: "url('img/map.svg')" }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12">
            <div className="homec-hero__inner homec-hero__inner--v2">
              <HeroContent />
              <ListingHeroSlider />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomecHero;
