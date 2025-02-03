import ProtoTypes from "prop-types";
import { useEffect, useState } from "react";
import { useUser } from "../../context/AuthDetailsProvider";

function ProfileStudent({ image, name, position }) {
  const { user } = useUser();
  const profilePicture = user?.profilePhoto || "/img/user-icon.png";
  const displayName = user?.firstName || "No data";

  return (
    <div className="col-lg-4">
      <div
        className="homec-property-ag homec-property-ag--side homec-bg-cover"
        style={{ backgroundImage: "url('/img/property-ag-bg.svg')" }}
      >
        <h3 className="homec-property-ag__title">Student</h3>
        <div className="homec-property-ag__author">
          <div className="homec-property-ag__author--img">
            <img src={profilePicture} alt="#" />
          </div>
          <div className="homec-property-ag__author--content">
            <h4 className="homec-property-ag__author--title">
              {displayName}
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
