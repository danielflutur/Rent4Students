import PropTypes from "prop-types";
import { useState } from "react";
import Select from "react-dropdown-select";

function SelectiveInput({ title, options, classes, onChange }) {
  const [selectedValue, setSelectedValue] = useState(options[0]);

  const handleChange = (values) => {
    const selectedOption = values[0]; // Get the first selected option (since it's a single selection dropdown)
    setSelectedValue(selectedOption);
    onChange(selectedOption); // Call onChange with the selected option
  };

  return (
    <div className={`property-sidebar__single ${classes}`}>
      <div className="property-sidebar__filters">
        <h4 className="property-sidebar__title">{title}</h4>
        <div className="form-group">
          <Select
            values={[selectedValue]}
            options={options}
            labelField="name"
            valueField="id"
            onChange={handleChange} // Trigger handleChange on option change
            searchBy="name"
            searchable={true}
            handle={true}
            placeholder="Select"
            closeOnSelect={true}
            dropdownPosition="auto"
            style={{
              outline: "none",
              padding: "10px",
              color: "#828ea3",
              cursor: "pointer",
            }}
          />
        </div>
      </div>
    </div>
  );
}

SelectiveInput.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  classes: PropTypes.string,
  onChange: PropTypes.func.isRequired, // Ensure onChange is passed as a prop
};

export default SelectiveInput;
