import ProtoTypes from "prop-types";
import SearchFaculty from "../Form/SearchFaculty";
import ShowingResultFaculty from "./ShowingResultFaculty";
import ListBtn from "../Button/ListBtn";

function FacultyBar({ gridStyle, handleGridStyle }) {
  return (
    <div className="homec-property-bar">
      <div className="homec-property-bar__single">
        <SearchFaculty />
        {/* Show Results   */}
        {/* End Show Results  */}
      </div>
      <div className="homec-property-bar__single">
        <div
          id="homec-tabs"
          className="list-group homec-gl-tabs"
          role="tablist"
        >
        </div>
      </div>
    </div>
  );
}

FacultyBar.propTypes = {
  gridStyle: ProtoTypes.string.isRequired,
  handleGridStyle: ProtoTypes.func.isRequired,
};

export default FacultyBar;
