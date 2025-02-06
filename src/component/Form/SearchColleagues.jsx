import { useContext, useState } from "react";
import { CompatibleStudentsContext } from "../../context/CompatibleStudentsProvider";
import { useEffect } from "react";

function SearchColleagues({ onSelectedChange }) {
  const [search, setSearch] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedColleagues, setSelectedColleagues] = useState([]);
  const compatibleStudents = useContext(CompatibleStudentsContext);
  const [filteredColleagues, setFilteredColleagues] = useState([]);

  const handleChange = (e) => {
    setSearch(e.target.value);
    setShowDropdown(true);
  };

  // Afișare dropdown la click pe buton
  const handleSearchClick = (e) => {
    e.preventDefault();
    setShowDropdown(true);
  };

// Select a colleague and add to the selected list
const handleSelectColleague = (colleague) => {
  if (!selectedColleagues.some((c) => c.id === colleague.id)) {
    const newSelected = [...selectedColleagues, colleague];
    setSelectedColleagues(newSelected);
    // If a callback is provided, call it with the new list
    if (onSelectedChange) onSelectedChange(newSelected);
  }
  setSearch(""); // Clear the input after selection
  setShowDropdown(false);
};

 // Remove a selected colleague
 const handleRemoveColleague = (id) => {
  const newSelected = selectedColleagues.filter((c) => c.id !== id);
  setSelectedColleagues(newSelected);
  if (onSelectedChange) onSelectedChange(newSelected);
};

  useEffect(() => {
    if (compatibleStudents) {
      const filtered = compatibleStudents
        .map((stud) => stud.student)
        .filter((student) =>
          student.firstName.toLowerCase().includes(search.toLowerCase())
        );
      setFilteredColleagues(filtered);
    }
  }, [search, compatibleStudents]);
  

  return (
    <div className="search-container">
      <div className="search-input-wrapper">
        <input
          type="text"
          placeholder="Caută colegi..."
          value={search}
          onChange={handleChange}
        />
        <button type="button" onClick={handleSearchClick}>
          Caută colegi
        </button>
      </div>

      {showDropdown && filteredColleagues.length > 0 && (
        <div className="dropdown">
          {filteredColleagues.map((colleague) => (
            <div
              key={colleague.id}
              className="colleague-item"
              onClick={() => handleSelectColleague(colleague)}
            >
              <img
                src={colleague.profilePhoto}
                alt={`${colleague.firstName} ${colleague.lastName}`}
              />
              <span>{`${colleague.firstName} ${colleague.lastName}`}</span>
            </div>
          ))}
        </div>
      )}

      {/* List of selected colleagues */}
      <div className="selected-colleagues">
        {selectedColleagues.map((colleague) => (
          <div key={colleague.id} className="selected-item">
            <img
              src={colleague.profilePhoto}
              alt={`${colleague.firstName} ${colleague.lastName}`}
            />
            <span>{`${colleague.firstName} ${colleague.lastName}`}</span>
            <button onClick={() => handleRemoveColleague(colleague.id)}>
              X
            </button>
          </div>
        ))}
      </div>

      <style jsx>{`
        .search-container {
          position: relative;
          width: 300px;
          margin: 0 auto;
        }
        .search-input-wrapper {
          display: flex;
        }
        input[type="text"] {
          flex: 1;
          padding: 8px;
          border: 1px solid #ddd;
          border-radius: 4px 0 0 4px;
        }
        button {
          padding: 8px 12px;
          border: 1px solid #ddd;
          border-left: none;
          background: #7166f0;
          color: #fff;
          cursor: pointer;
          border-radius: 0 4px 4px 0;
        }
        .dropdown {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: #fff;
          border: 1px solid #ddd;
          border-top: none;
          max-height: 200px;
          overflow-y: auto;
          z-index: 10;
        }
        .colleague-item {
          display: flex;
          align-items: center;
          padding: 8px;
          border-bottom: 1px solid #eee;
          cursor: pointer;
        }
        .colleague-item:hover {
          background: #f9f9f9;
        }
        .colleague-item img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          margin-right: 10px;
          object-fit: cover;
        }
        .selected-colleagues {
          margin-top: 10px;
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .selected-item {
          display: flex;
          align-items: center;
          background: #f3f3f3;
          padding: 5px;
          border-radius: 4px;
        }
        .selected-item img {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          margin-right: 8px;
        }
        .selected-item button {
          margin-left: 8px;
          background: red;
          color: white;
          border: none;
          cursor: pointer;
          padding: 3px 6px;
          border-radius: 50%;
        }
      `}</style>
    </div>
  );
}

export default SearchColleagues;
