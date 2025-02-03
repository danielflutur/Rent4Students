import PropertyTextAreaV2 from "../Form/PropertyTextAreaV2";
import { useEffect, useState } from "react";
import Select from "react-dropdown-select";
import AddressApiService from "../../services/AddressApiService";
import Preloader from "../Loader";

function FacultyAddressInput({ address, handleLocation }) {
  const [selectedCounty, setSelectedCounty] = useState(null);
  const [counties, setCounties] = useState([]);
  const [localities, setLocalities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFetchingLocalities, setIsFetchingLocalities] = useState(false);
  const [selectedLocality, setSelectedLocality] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    AddressApiService.get("geonameId=798549")
      .then((response) => {
        setCounties(response.data.geonames);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching counties:", error);
        setIsLoading(false);
      });
  }, []);

  const fetchLocalities = (countyId) => {
    setIsFetchingLocalities(true);
    AddressApiService.get(`geonameId=${countyId}`)
      .then((response) => {
        const filteredLocalities = response.data.geonames
          .filter(
            (locality) =>
              locality.toponymName.startsWith("Municipiul") ||
              locality.toponymName.startsWith("Oraș")
          )
          .map((locality) => {
            const nameParts = locality.toponymName.split(" ");
            return {
              name: nameParts.slice(1).join(" "),
              id: locality.geonameId,
              lat: parseFloat(locality.lat),
              lng: parseFloat(locality.lng),
            };
          });
        setLocalities(filteredLocalities);
        setIsFetchingLocalities(false);
      })
      .catch((error) => {
        console.error("Error fetching localities:", error);
        setIsFetchingLocalities(false);
      });
  };

  const handleCountyChange = (selected) => {
    const selectedCounty = selected[0];
    setSelectedCounty(selectedCounty);
    if (selectedCounty?.id) {
      fetchLocalities(selectedCounty.id);
      handleLocation({
        county: selectedCounty.name, // Update only the county field
      });
    }
  };

  const handleLocalityChange = (selected) => {
    const locality = selected[0];
    setSelectedLocality(locality);
    handleLocation({
      city: locality.name, // Update only the city field
    });
  };

  const handleTextArea = (data) => {
    handleLocation({
      addressDetails: data.target.value, // Update only the addressDetails field
    });
  };

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <div className="homec-submit-form mg-top-40">
      <h4 className="homec-submit-form__title">Adresa Facultății</h4>
      <div className="homec-submit-form__inner">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12">
            <div className="mg-top-20">
              <h4 className="homec-submit-form__heading">Județul*</h4>
              <Select
                values={selectedCounty ? [selectedCounty] : []}
                options={counties.map((county) => ({
                  name: county.toponymName,
                  id: county.geonameId,
                }))}
                labelField="name"
                valueField="id"
                onChange={handleCountyChange}
                searchable={true}
                placeholder="Select County"
                closeOnSelect={true}
                dropdownPosition="auto"
                className="homec-form-select homec-border"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div className="mg-top-20">
              <h4 className="homec-submit-form__heading">Orașul*</h4>
              <Select
                values={selectedLocality ? [selectedLocality] : []}
                options={localities.map((locality) => ({
                  name: locality.name,
                  id: locality.id,
                  lat: locality.lat,
                  lng: locality.lng,
                }))}
                labelField="name"
                valueField="id"
                onChange={handleLocalityChange}
                searchable={true}
                placeholder={
                  isFetchingLocalities ? "Loading..." : "Select Locality"
                }
                closeOnSelect={true}
                dropdownPosition="auto"
                className="homec-form-select homec-border"
                disabled={isFetchingLocalities || !selectedCounty}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <PropertyTextAreaV2
              title="Detalii Adresă (stradă, număr, etc.)*"
              value={address.addressDetails}
              handleChange={handleTextArea}
              name="addressDetails"
              placeHolder="Alexandru cel Bun, 12, Bl. B1, Sc. C, Ap.4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FacultyAddressInput;
