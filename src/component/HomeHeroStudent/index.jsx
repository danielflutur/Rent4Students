import HeroContentStudent from "./HeroContentStudent";
import HeroSliderStudent from "./HeroSliderStudent";
import ProfileStudent from "../Students/ProfileStudent";

function HomecHeroStudent() {
  return (
    <section
      id="hero"
      className="homec-hero homec-hero__v2 "
      style={{ backgroundImage: "url('img/map.svg')" }}
    >
      <div className="profile-student-container">
        <ProfileStudent image="img/profile_picture.png" name="Alice" />
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12">
            <div className="homec-hero__inner homec-hero__inner--v3">
              <HeroContentStudent />
              <HeroSliderStudent />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomecHeroStudent;
