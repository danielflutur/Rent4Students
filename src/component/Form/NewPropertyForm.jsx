import { useState } from "react";
import PropertyTextInput from "./PropertyTextInput";
import PropertyTextArea from "./PropertyTextArea";
import ImageInput from "./ImageInput";
import PropertyLocationInput from "./PropertyLocationInput";
import PropertyAmenitiesInput from "./PropertyAmenitiesInput";
import SelectDropDown from "../SelectDropDown/SelectDropDown";
import { useData } from "../../context/ListingFeaturesProvider";
import { useTypeData } from "../../context/ListingTypeProvider";
import ApiService from "../../services/ApiService";

function NewPropertyFrom() {
  const { features } = useData();
  const { types } = useTypeData();

  const facilities = features
    .filter((feature) => feature.name === "Facilitati")
    .map((feature) => ({
      id: feature.id,
      name: feature.name,
      value: feature.value,
      checked: false,
    }));

  const [input, setInput] = useState({
    title: "",
    description: "",
    propertyType: "",
    rentPrice: "",
    depositAmount: "",
    buildingYear: "",
    surface: "",
    numberOfRooms: "",
    floor: "",
    furnishedStatus: "",
    apartmentLayout: "",
    heating: "",
    elevator: "",
    petsAllowed: "",
    smokingPolicy: "",
    rentFlexibility: "",
    minimumRent: "",
    buildingMaterial: "",
    windowMaterial: "",
    aditionalStorage: "",
    propertyImage: [],
    location: { county: "", city: "", addressDetails: "", googleMaps: "" },
    amenities: facilities
  });

  // handle property information

  const handleTextChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  // handle editable textarea
  const handleTextArea = (e) => {
    setInput({ ...input, [e.name]: e.value });
  };

  // handle property location input sector

  const handleLocationChange = (e) => {
    setInput({
      ...input,
      location: { ...input.location, [e.target.name]: e.target.value },
    });
  };

  // Handle image uploads
  const handleImageUpload = (files) => {
    setInput((prevState) => ({
      ...prevState,
      propertyImage: [...prevState.propertyImage, ...files],
    }));
  };

   // Handle image deletion
   const handleImageDelete = (id) => {
    setInput((prevState) => ({
      ...prevState,
      propertyImage: prevState.propertyImage.filter(
        (image, index) => index !== id
      ),
    }));
  };
  
  const handleDropdownChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  // handle amenities

  const handleCheckBox = (e, id) => {
    setInput((prevState) => ({
      ...prevState,
      amenities: prevState.amenities.map((amenity) =>
        amenity.id === id ? { ...amenity, checked: e.target.checked } : amenity
      ),
    }));
  };

   // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      // Append all input fields
      Object.keys(input).forEach((key) => {
        if (key === "propertyImage") {
          // Append images separately
          input.propertyImage.forEach((image) => {
            formData.append("propertyImage", image);
          });
        } else if (typeof input[key] === "object" && input[key] !== null) {
          // Append nested objects as JSON strings
          formData.append(key, JSON.stringify(input[key]));
        } else {
          formData.append(key, input[key]);
        }
      });

      // Use apiService to make the POST request
      const response = await ApiService.post("Listing", formData);
      console.log(response);
      
      if (response.status === 200) {
        console.log("Property submitted successfully!");
      } else {
        console.error("Error submitting property:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting property:", error);
    }
  };

  return (
    <section className="pd-top-80 pd-btm-80">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <form action="#" onSubmit={(e) => handleSubmit(e)}>
              <div className="homec-submit-form">
                <h4 className="homec-submit-form__title">
                  Informatii Proprietate
                </h4>
                <div className="homec-submit-form__inner">
                  <div className="row">
                    <PropertyTextInput
                      title="Titlu*"
                      name="title"
                      value={input.title}
                      handleChange={handleTextChange}
                      placeholder="Titlu"
                    />
                    <PropertyTextArea
                      title="Descriere*"
                      name="description"
                      value={input.description}
                      handleChange={handleTextArea}
                      placeholder="Descriere"
                    />
                    <SelectDropDown
                      size="col-lg-6 col-md-6"
                      title="Tip Proprietate*"
                      name="propertyType"
                      value={input.propertyType}
                      data={types}
                      handleChange={handleDropdownChange}
                    />
                    <PropertyTextInput
                      size="col-lg-6 col-md-6"
                      title="Pret Chirie*"
                      name="rentPrice"
                      value={input.rentPrice}
                      handleChange={handleTextChange}
                      placeholder="200"
                    />
                    <PropertyTextInput
                      size="col-lg-6 col-md-6"
                      title="Avans Chirie*"
                      name="depositAmount"
                      value={input.depositAmount}
                      handleChange={handleTextChange}
                      placeholder="200"
                    />
                    <PropertyTextInput
                      size="col-lg-6 col-md-6"
                      title="An Constructie"
                      name="buildingYear"
                      value={input.buildingYear}
                      handleChange={handleTextChange}
                      placeholder="2008"
                    />
                    <PropertyTextInput
                      size="col-lg-6 col-md-6"
                      title="Suprafata (m2)*"
                      name="surface"
                      value={input.surface}
                      handleChange={handleTextChange}
                      placeholder="46"
                    />
                    <PropertyTextInput
                      size="col-lg-6 col-md-6"
                      title="Nr. Camere*"
                      name="numberOfRooms"
                      value={input.numberOfRooms}
                      handleChange={handleTextChange}
                      placeholder="2"
                    />
                    <SelectDropDown
                      size="col-lg-6 col-md-6"
                      title="Etaj*"
                      name="floor"
                      value={input.floor}
                      data={features.filter(
                        (feature) => feature.name === "Etaj"
                      )}
                      handleChange={handleDropdownChange}
                    />
                    <SelectDropDown
                      size="col-lg-6 col-md-6"
                      title="Status Mobilare*"
                      name="furnishedStatus"
                      value={input.furnishedStatus}
                      data={features.filter(
                        (feature) => feature.name === "Status Mobilare"
                      )}
                      handleChange={handleDropdownChange}
                    />
                    <SelectDropDown
                      size="col-lg-6 col-md-6"
                      title="Aranjamentul Apartamentului*"
                      name="apartmentLayout"
                      value={input.apartmentLayout}
                      data={features.filter(
                        (feature) =>
                          feature.name === "Aranjamentul Apartamentului"
                      )}
                      handleChange={handleDropdownChange}
                    />
                    <SelectDropDown
                      size="col-lg-6 col-md-6"
                      title="Incalzire*"
                      name="heating"
                      value={input.heating}
                      data={features.filter(
                        (feature) => feature.name === "Incalzire"
                      )}
                      handleChange={handleDropdownChange}
                    />
                    <SelectDropDown
                      size="col-lg-6 col-md-6"
                      title="Lift*"
                      name="elevator"
                      value={input.elevator}
                      data={features.filter(
                        (feature) => feature.name === "Lift"
                      )}
                      handleChange={handleDropdownChange}
                    />
                    <SelectDropDown
                      size="col-lg-6 col-md-6"
                      title="Animale de companie*"
                      name="petsAllowed"
                      value={input.petsAllowed}
                      data={features.filter(
                        (feature) => feature.name === "Animale de companie"
                      )}
                      handleChange={handleDropdownChange}
                    />
                    <SelectDropDown
                      size="col-lg-6 col-md-6"
                      title="Politica Fumat*"
                      name="smokingPolicy"
                      value={input.smokingPolicy}
                      data={features.filter(
                        (feature) => feature.name === "Politica Fumat"
                      )}
                      handleChange={handleDropdownChange}
                    />
                    <SelectDropDown
                      size="col-lg-6 col-md-6"
                      title="Flexibilitate Chirie"
                      name="rentFlexibility"
                      value={input.rentFlexibility}
                      data={features.filter(
                        (feature) => feature.name === "Flexibilitate Chirie"
                      )}
                      handleChange={handleDropdownChange}
                    />
                    <SelectDropDown
                      size="col-lg-6 col-md-6"
                      title="Perioada Minima de Inchiriere*"
                      name="minimumRent"
                      value={input.minimumRent}
                      data={features.filter(
                        (feature) =>
                          feature.name === "Perioada Minima de Inchiriere"
                      )}
                      handleChange={handleDropdownChange}
                    />
                    <SelectDropDown
                      size="col-lg-6 col-md-6"
                      title="Material Constructie"
                      name="buildingMaterial"
                      value={input.buildingMaterial}
                      data={features.filter(
                        (feature) => feature.name === "Material Constructie"
                      )}
                      handleChange={handleDropdownChange}
                    />
                    <SelectDropDown
                      size="col-lg-6 col-md-6"
                      title="Material Ferestre"
                      name="windowMaterial"
                      value={input.windowMaterial}
                      data={features.filter(
                        (feature) => feature.name === "Material Ferestre"
                      )}
                      handleChange={handleDropdownChange}
                    />
                    <SelectDropDown
                      size="col-lg-6 col-md-6"
                      title="Depozitare Aditionala*"
                      name="aditionalStorage"
                      value={input.aditionalStorage}
                      data={features.filter(
                        (feature) => feature.name === "Depozitare Aditionala"
                      )}
                      handleChange={handleDropdownChange}
                    />
                  </div>
                </div>
              </div>
              <PropertyLocationInput
                location={input.location}
                handleLocation={handleLocationChange}
              />
              <ImageInput
                uploadedImg={input.propertyImage}
                handleDelete={handleImageDelete}
                handleImage={handleImageUpload}
              />
              <PropertyAmenitiesInput
                amenities={input.amenities}
                handleChange={handleCheckBox}
              />
              <div className="row">
                <div className="col-12 d-flex justify-content-end mg-top-40">
                  <button type="submit" className="homec-btn homec-btn__second">
                    <span>Submit Property Now</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewPropertyFrom;
