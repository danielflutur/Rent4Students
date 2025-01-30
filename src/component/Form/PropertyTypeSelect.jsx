import { useTypeData } from "../../context/ListingTypeProvider";
import Select from "react-dropdown-select";
import { useState } from "react";

function PropertySelectInput({
  size,
  title,
  margin,
}) {
  const { types } = useTypeData();
  const [value, setValue] = useState({
      id: types[0].id,
      name: types[0].name,
    });
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
            values={[value]}
            options={types.map(({name, id}) => ({
              name: name,
              id: id,
            }))}
            labelField="name"
            valueField="id"
            onChange={(values) => setValue(values)}
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

export default PropertySelectInput;
