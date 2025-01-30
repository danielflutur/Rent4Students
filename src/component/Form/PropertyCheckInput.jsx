import ProtoTypes from "prop-types";
import "../StudentHobbiesInput/StudentHobbiesInput.css";

function PropertyCheckInput({ title, handleChange, isChecked }) {
  return (
    <div className="form-group page-form-checkbox mg-top-15">
      <input
        type="checkbox"
        id="item2"
        name={title}
        checked={isChecked}
        onChange={(e) => handleChange(e)}
      />
      <label className="page-form-label" htmlFor="item2">
        {title}
      </label>
    </div>
  );
}

PropertyCheckInput.propTypes = {
  title: ProtoTypes.string.isRequired,
  isChecked: ProtoTypes.bool.isRequired,
  handleChange: ProtoTypes.func.isRequired,
};

export default PropertyCheckInput;
