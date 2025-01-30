import { useEffect, useState } from "react";
import Title from "../Title";
import TitleBtn from "../Button/TitleBtn";
import LatestPropertyCard from "../Cards/LatestPropertyCard";
import ApiService from "../../services/ApiService";


function LatestProperty() {
  const [data, setData] = useState([]);

  useEffect(() => {
    ApiService.get("Listings")
      .then((response) => setData(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <section
      className="homec-properties homec-bg-cover pd-top-120 pd-btm-120"
      style={{ backgroundImage: "url('img/bg-shape-four.svg')" }}
    >
      <div className="homec-shape">
        <div className="homec-shape-single homec-shape-7">
          <img src="img/anim-shape-4.svg" alt="#" />
        </div>
        <div className="homec-shape-single homec-shape-8">
          <img src="img/anim-shape-5.svg" alt="#" />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Title
              firstText="View All 329 New Listings"
              secondText=" Latest Properties"
              marginSize="30"
              styleSecond={{ color: "#ffff" }}
            />
          </div>
        </div>

        <div className="row">
          {data?.map((property) => (
            <LatestPropertyCard
              key={property.id}
              id={property.id}
              title={property.title}
              rentPrice={property.rentPrice}
              surface={property.surface}
              address={property.address}
              photos={property.photos}
            />
          ))}
        </div>
        <div className="row">
          <TitleBtn delay="600" link="/property" text="See all Properties" />
        </div>
      </div>
    </section>
  );
}

export default LatestProperty;
