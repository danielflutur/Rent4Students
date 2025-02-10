import Select from "react-dropdown-select";

function SelectDropDown({ size, title, margin, data, name, handleChange, defaultValueId }) {
  return (
    <div className={`${size && size} col-8`}>
      <div className="mg-top-10">
        <h4
          className="homec-submit-form__heading"
          style={{ marginBottom: margin }}
        >
          {title}
        </h4>
        <div className="form-group homec-form-input">
          <Select
            values={defaultValueId}
            options={data.map((individualData) => ({
              name: individualData.value,
              id: individualData.id,
            }))}
            labelField="name"
            valueField="id"
            onChange={(selectedValues) => {
              if (selectedValues.length > 0) {
                handleChange({
                  target: { name, value: selectedValues[0].id }, // Pass correct data
                });
              }
            }}
            searchBy="name"
            searchable
            placeholder="Select"
            closeOnSelect
            dropdownPosition="auto"
            className="homec-form-select homec-border"
          />
        </div>
      </div>
    </div>
  );
}

export default SelectDropDown;
