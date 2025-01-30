import PropertyCheckInput from "../Form/PropertyCheckInput";

function StudentHobbiesInput({ hobbies, handleChange }) {
  return (
    <div className="homec-submit-form mg-top-40">
      <h4 className="homec-submit-form__title">Hobby-uri</h4>
      <div className="homec-submit-form__inner">
        <div className="form-group homec-form-input--list">
          {hobbies.map((item) => (
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

export default StudentHobbiesInput;
