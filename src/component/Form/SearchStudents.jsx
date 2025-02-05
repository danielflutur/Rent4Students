import { useState } from "react";
import { useTranslation } from "react-i18next";

function SearchStudents() {
  const { t } = useTranslation(); // Hook pentru traducere
  const [search, setSearch] = useState("");
  
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      className="homec-form__form homec-form__form--bar"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <input
        type="text"
        name="search"
        placeholder={t("search_students_placeholder")} // Folosim traducerea pentru placeholder
        required=""
        value={search}
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <button type="submit" className="homec-btn">
        <span>{t("search_button")}</span> {/* Folosim traducerea pentru buton */}
      </button>
    </form>
  );
}

export default SearchStudents;
