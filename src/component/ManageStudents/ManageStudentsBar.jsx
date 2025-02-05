import ProtoTypes from "prop-types";
import SearchStudents from "../Form/SearchStudents";

function ManageStudentsBar({ gridStyle, handleGridStyle }) {
  return (
    <div className="homec-property-bar">
      <div className="homec-property-bar__single">
        <SearchStudents />
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

ManageStudentsBar.propTypes = {
  gridStyle: ProtoTypes.string.isRequired,
  handleGridStyle: ProtoTypes.func.isRequired,
};

export default ManageStudentsBar;
