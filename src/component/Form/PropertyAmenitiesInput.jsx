import PropTypes from "prop-types";
import PropertyCheckInput from "./PropertyCheckInput";

function PropertyAmenitiesInput({ amenities, handleChange }) {
  return (
    <div className="homec-submit-form mg-top-40">
      <h4 className="homec-submit-form__title">Facilitati</h4>
      <div className="homec-submit-form__inner">
        <div className="form-group homec-form-input--list">
          {amenities.map((item) => (
            <PropertyCheckInput
              key={item.id}
              title={item.value}
              isChecked={item.checked}
              handleChange={() => handleChange(item.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

PropertyAmenitiesInput.propTypes = {
  amenities: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default PropertyAmenitiesInput;
