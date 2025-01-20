import Select from "react-dropdown-select";

function SelectDropDown({
  size,
  title,
  margin,
  data,
  name,
  value,
  handleChange,
}) {
  return (
    <div className={`${size && size} col-12 `}>
      <div className="mg-top-20">
        <h4
          className="homec-submit-form__heading"
          style={{ marginBottom: margin }}
        >
          {title}
        </h4>
        <div className="form-group homec-form-input">
          <Select
            values={[data[0]]}
            options={data.map((individualData) => ({
              name: individualData.value,
              id: individualData.id,
            }))}
            labelField="name"
            valueField="id"
            onChange={(selectedValues) => {
              handleChange({ target: { name, value: selectedValues[0]?.id } });
            }}
            searchBy="name"
            searchable={true}
            handle={true}
            placeholder="Select"
            closeOnSelect={true}
            dropdownPosition="auto"
            className="homec-form-select homec-border"
          />
        </div>
      </div>
    </div>
  );
}

export default SelectDropDown;
