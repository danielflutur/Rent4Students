import ProtoTypes from "prop-types";

function ShowingResultManageStudents({ currentPage, totalPages }) {
  return (
    <div className="hoemc-showing-results">
      <p className="hoemc-showing-results__text">
        Arată <span>{currentPage}</span> din <span>{totalPages}</span> rezultate
      </p>
    </div>
  );
}

ShowingResultManageStudents.propTypes = {
  currentPage: ProtoTypes.string.isRequired || ProtoTypes.number.isRequired,
  totalPages: ProtoTypes.string.isRequired,
};

export default ShowingResultManageStudents;
