import PropTypes from "prop-types";

function CheckInput({ title, properties, name, onChange }) {
  const handleChange = (id, isSelected) => {
    onChange(id, isSelected); // Trigger the callback onChange with the filter ID and selection status
  };

  return (
    <div className="property-sidebar__single mg-top-20">
      <div className="property-sidebar__checkboxd">
        <h4 className="property-sidebar__title m-0">{title}</h4>
        <div className="row">
          {properties.map((item) => (
            <div className="col-md-6 col-12" key={item.id}>
              <div className="form-group homec-form-checkbox mg-top-15">
                <input
                  type="checkbox"
                  id={item.id}
                  name={item.label}
                  value={name}
                  onChange={(e) => handleChange(item.id, e.target.checked)} // Pass the id and checked state
                />
                <label className="homec-form-label" htmlFor={item.id}>
                  {item.label}
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

CheckInput.propTypes = {
  title: PropTypes.string.isRequired,
  properties: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired, // Ensure onChange is passed as a prop
};

export default CheckInput;
