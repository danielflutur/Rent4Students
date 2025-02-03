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

  const groupedFeatures = features.reduce((acc, feature) => {
    if (!acc[feature.name]) acc[feature.name] = [];
    acc[feature.name].push({ id: feature.id, value: feature.value });
    return acc;
  }, {});

  const facilities = groupedFeatures["Facilitati"] || [];

  const [input, setInput] = useState({
    title: "",
    description: "",
    rentPrice: "",
    depositAmount: "",
    buildingYear: "",
    surface: "",
    listingTypeId: "",
    address: {
      addressDetails: "",
      city: "",
      county: "",
      googleMap: ""
    },
    ownerId: "E51F5E7E-D9D0-4339-EF75-08DD19211861",
    amenitiesIds: [],
    photos: [],
  });

  const [facilityState, setFacilityState] = useState(
    facilities.map((item) => ({
      id: item.id,
      value: item.value,
      checked: input.amenitiesIds.includes(item.id),
    }))
  );

  const handleImageInput = async (images) => {
    const uploadedPhotos = [];

    for (const image of images) {
      const formData = new FormData();
      formData.append("image", image);

      try {
        const response = await ApiService.post("/detect-appliances", formData);
        if (response.data) {
          uploadedPhotos.push({
            id: image.name,
            img: URL.createObjectURL(image),
            detectedObjects: response.data,
            image: image
          });

          const detectedFacilities = response.data.map(
            (detectedFacility) => detectedFacility.id
          );

          setFacilityState((prevState) =>
            prevState.map((facility) => ({
              ...facility,
              checked: detectedFacilities.includes(facility.id),
            }))
          );

          setInput((prevInput) => ({
            ...prevInput,
            amenitiesIds: detectedFacilities,
          }));
        } else {
          uploadedPhotos.push({
            id: image.name,
            img: URL.createObjectURL(image),
            detectedObjects: [],
            image: image
          });
        }
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }

    setInput((prev) => ({
      ...prev,
      photos: [...prev.photos, ...uploadedPhotos],
    }));
  };

  const handleImageDelete = (id) => {
    setInput((prev) => ({
      ...prev,
      photos: prev.photos.filter((photo) => photo.id !== id),
    }));
  };

  const handleTextChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleTextArea = (e) => {
    setInput({ ...input, [e.name]: e.value });
  };

  const handleListingTypeChange = (selectedId) => {
    setInput((prevInput) => ({
      ...prevInput,
      listingTypeId: selectedId,
    }));
  };

  const handleDropdownChange = (groupName, selectedId) => {
    setInput((prevInput) => {
      const updatedAmenitiesIds = [...prevInput.amenitiesIds];
      if (!updatedAmenitiesIds.includes(selectedId)) {
        updatedAmenitiesIds.push(selectedId);
      }
      return { ...prevInput, amenitiesIds: updatedAmenitiesIds };
    });
  };

  const handleFacilityChange = (id) => {
    setInput((prevInput) => {
      const updatedAmenitiesIds = prevInput.amenitiesIds.includes(id)
        ? prevInput.amenitiesIds.filter((amenityId) => amenityId !== id)
        : [...prevInput.amenitiesIds, id];

      setFacilityState((prevState) =>
        prevState.map((facility) =>
          facility.id === id
            ? { ...facility, checked: !facility.checked }
            : facility
        )
      );

      return { ...prevInput, amenitiesIds: updatedAmenitiesIds };
    });
  };

  const handleAddressChange = (newAddressField) => {
    setInput((prevInput) => ({
      ...prevInput,
      address: {
        ...prevInput.address,
        ...newAddressField,
      },
    }));
  };

  const renderSelectDropDowns = () => {
    return Object.entries(groupedFeatures)
      .filter(([groupName]) => groupName !== "Facilitati")
      .map(([groupName, options]) => (
        <SelectDropDown
          key={groupName}
          size="col-lg-6 col-md-6"
          title={groupName}
          name={groupName.toLowerCase().replace(/\s+/g, "")}
          data={options}
          handleChange={(e) => handleDropdownChange(groupName, e.target.value)}
        />
      ));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();
      data.append('Title', input.title);
      data.append('Description', input.description);
      data.append('RentPrice', input.rentPrice);
      data.append('DepositAmount', input.depositAmount);
      data.append('BuildingYear', input.buildingYear);
      data.append('Surface', input.surface);
      data.append('ListingTypeId', input.listingTypeId);

      data.append('Address.AddressDetails', input.address.addressDetails);
      data.append('Address.City', input.address.city);
      data.append('Address.County', input.address.county);

      data.append('OwnerId', input.ownerId);

      input.photos.forEach((photo) => {
        data.append('Photos', photo.image);
      });
      
      input.amenitiesIds.forEach((id) => {
        data.append('AmenitiesIds', id);
      });

      const response = await ApiService.post('Listings', data);
      console.log('Listing created successfully:', response.data);
    } catch (error) {
      console.error('Error creating listing:', error.response?.data || error.message);
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
                    <PropertyTextInput
                      title="Pret Chirie*"
                      size="col-lg-6 col-md-6"
                      name="rentPrice"
                      value={input.rentPrice}
                      handleChange={handleTextChange}
                      placeholder="200"
                    />
                    <PropertyTextInput
                      title="Avans Chirie*"
                      size="col-lg-6 col-md-6"
                      name="depositAmount"
                      value={input.depositAmount}
                      handleChange={handleTextChange}
                      placeholder="200"
                    />
                    <PropertyTextInput
                      title="An Constructie"
                      size="col-lg-6 col-md-6"
                      name="buildingYear"
                      value={input.buildingYear}
                      handleChange={handleTextChange}
                      placeholder="2008"
                    />
                    <PropertyTextInput
                      title="Suprafata (m2)*"
                      size="col-lg-6 col-md-6"
                      name="surface"
                      value={input.surface}
                      handleChange={handleTextChange}
                      placeholder="46"
                    />
                    <SelectDropDown
                      title="Tip Proprietate*"
                      size="col-lg-6 col-md-6"
                      name="propertyType"
                      value={input.listingTypeId}
                      data={types}
                      handleChange={(e) =>
                        handleListingTypeChange(e.target.value)
                      }
                    />
                    {renderSelectDropDowns()}
                  </div>
                </div>
              </div>
              <PropertyLocationInput
                address={input.address}
                handleLocation={handleAddressChange}
              />
              <ImageInput
                uploadedImg={input.photos}
                handleDelete={handleImageDelete}
                handleImage={handleImageInput}
              />
              <PropertyAmenitiesInput
                amenities={facilityState}
                handleChange={handleFacilityChange}
              />
              <div className="row">
                <div className="col-12 d-flex justify-content-end mg-top-40">
                  <button type="submit" className="homec-btn homec-btn__second"
                  onClick={handleSubmit}>
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
