import { useState } from "react";

function Search() {
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
        placeholder="Caută Proprietăți..."
        required=""
        value={search}
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <button type="submit" className="homec-btn">
        <span>Caută</span>
      </button>
    </form>
  );
}

export default Search;
