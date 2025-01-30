import ProtoTypes from "prop-types";
import { useState } from "react";

function ProfileStudent({ image, name, position }) {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  return (
    <div className="col-lg-4">
      <div
        className="homec-property-ag homec-property-ag--side homec-bg-cover"
        style={{ backgroundImage: "url('/img/property-ag-bg.svg')" }}
      >
        <h3 className="homec-property-ag__title">Student</h3>
        <div className="homec-property-ag__author">
          <div className="homec-property-ag__author--img">
            <img src={image} alt="#" />
          </div>
          <div className="homec-property-ag__author--content">
            <h4 className="homec-property-ag__author--title">
              {name}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

ProfileStudent.propTypes = {
  image: ProtoTypes.string.isRequired,
  name: ProtoTypes.string.isRequired,
};

export default ProfileStudent;
