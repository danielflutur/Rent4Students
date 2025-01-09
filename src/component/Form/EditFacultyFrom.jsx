import { useState } from "react";
import PropertyTextInput from "./PropertyTextInput";
import PropertyTextArea from "./PropertyTextArea";
import ImageInput from "./ImageInput";
import PropertyVideoInput from "./PropertyVideoInput";
import PropertyLocationInput from "./PropertyLocationInput";
import PropertyAminitiesInput from "./PropertyAminitiesInput";
import KeyValueInput from "./KeyValueInput";
import PropertyPlan from "./PropertyPlan";
import PropertyTextAreaV2 from "./PropertyTextAreaV2";
import SwitcherBtn from "./SwitcherBtn";

function EditFacultyFrom() {
  const [input, setInput] = useState({
    title: "",
    slug: "",
    propertyType: "",
    purpose: "",
    rentPeriod: "",
    propertyPrice: "",
    area: "",
    unit: "",
    bedroom: "",
    bathroom: "",
    garage: "",
    kitchen: "",
    description: "",
    propertyImage: [
      { id: 1, img: "https://placehold.co/165x205" },
      { id: 2, img: "https://placehold.co/165x205" },
      { id: 3, img: "https://placehold.co/165x205" },
    ],
    video: { video: "", description: "", YTVideoId: "" },
    location: { city: "", address: "", addressDetails: "", googleMap: "" },
    aminities: {
      Breakfast: true,
      Lunch: false,
      ["Free Wifi"]: false,
      ["Swimming Pool"]: false,
      Cleaning: false,
    },
    nearestLocation: [
      { id: 1, key: "", value: "" },
      { id: 2, key: "", value: "" },
      { id: 3, key: "", value: "" },
    ],
    additionalInformation: [
      { id: 1, key: "", value: "" },
      { id: 2, key: "", value: "" },
      { id: 3, key: "", value: "" },
    ],
    propertyPlan: [
      {
        id: 1,
        videoId: "",
        thumbnail: "https://placehold.co/528x196",
        desc: "",
      },
      {
        id: 2,
        videoId: "",
        thumbnail: "https://placehold.co/528x196",
        desc: "",
      },
      {
        id: 3,
        videoId: "",
        thumbnail: "https://placehold.co/528x196",
        desc: "",
      },
    ],
    seoInfo: {
      title: "",
      desc: "",
      status: true,
      urgentProperty: false,
      featured: true,
      topProperty: false,
    },
  });

  // handle property information

  const handleTextChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  // handle editable textarea
  const handleTextArea = (e) => {
    setInput({ ...input, [e.name]: e.value });
  };

  // delete property image

  const handleImageDelete = (id) => {
    setInput({
      ...input,
      propertyImage: input.propertyImage.filter((image) => image.id !== id),
    });
  };

  // handle property video input sector

  const handleVideoChange = (e) => {
    setInput({
      ...input,
      video: { ...input.video, [e.target.name]: e.target.value },
    });
  };

  // handle property location input sector

  const handleLocationChange = (e) => {
    setInput({
      ...input,
      location: { ...input.location, [e.target.name]: e.target.value },
    });
  };

  // handle property image input sector

  const handleImageInput = (img) => {
    const updatedImg = [...input.propertyImage];
    updatedImg.push({
      id: updatedImg.reduce((total, current) => total > current.id, 0) + 1,
      img,
    });
  };

  // handle aminities

  const handleCheckBox = (e) => {
    setInput({
      ...input,
      aminities: { ...input.aminities, [e.target.name]: e.target.checked },
    });
  };
  // handle Property Plan, additionalInformation, nearestLocation add new item or delete item

  const handleAddOrDelete = (type, id, keyType) => {
    if (type === "add") {
      const newId =
        input[keyType].reduce(
          (max, current) => (max < current.id ? current.id : max),
          0
        ) + 1;
      setInput({
        ...input,
        [keyType]: [{ id: newId, key: "", value: "" }, ...input[keyType]],
      });
    } else {
      setInput({
        ...input,
        [keyType]: input[keyType].filter((item) => item.id != id),
      });
    }
  };
  // handle Property Plan, additionalInformation, nearestLocation input filled
  const handleKeyValueChange = ({ id, keyType, inputType, value }) => {
    setInput({
      ...input,
      [keyType]: input[keyType].map((item) =>
        item.id === id ? { ...item, [inputType]: value } : item
      ),
    });
  };
  //handle SEO Sector input
  const handleSEO = (e, value) => {
    if (typeof value === "undefined") {
      setInput({
        ...input,
        seoInfo: { ...input.seoInfo, [e.target.name]: e.target.value },
      });
    } else {
      setInput({
        ...input,
        seoInfo: { ...input.seoInfo, [e]: value },
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
  };

  return (
    <section className="pd-top-80 pd-btm-80">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <form action="#" onSubmit={(e) => handleSubmit(e)}>
              <div className="homec-submit-form">
                <h4 className="homec-submit-form__title">
                  Informații Facultate
                </h4>
                <div className="homec-submit-form__inner">
                  <div className="row">
                    <PropertyTextInput
                      title="Nume Facultate*"
                      name="title"
                      value={input.title}
                      handleChange={handleTextChange}
                      placeholder="Nume"
                    />
                    <PropertyTextInput
                      title="Secretar*"
                      name="name_secretary"
                      value={input.name}
                      handleChange={handleTextChange}
                      placeholder="Nume și Prenume Secretar"
                    />
                    <PropertyTextInput
                      title="Email*"
                      name="email"
                      value={input.email}
                      handleChange={handleTextChange}
                      placeholder="secretar@gmail.com"
                    />
              </div>
              </div>
              </div>
              <div className="row">
                <div className="col-12 d-flex justify-content-end mg-top-40">
                  <button type="submit" className="homec-btn homec-btn__second">
                    <span>Editează Faculate</span>
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

export default EditFacultyFrom;
