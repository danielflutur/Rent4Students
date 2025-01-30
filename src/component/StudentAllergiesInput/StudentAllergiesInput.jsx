import PropertyCheckInput from "../Form/PropertyCheckInput";

function StudentAllergiesInput({ allergies, handleChange }) {
  return (
    <div className="homec-submit-form mg-top-10">
      <h4 className="homec-submit-form__title">Alergii</h4>
      <div className="homec-submit-form__inner">
        <div className="form-group homec-form-input--list">
          {allergies.map((item) => (
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

export default StudentAllergiesInput;
