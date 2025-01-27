import { useState } from "react";
import FacultyBar from "./FacultyBar";
import Sidebar from "../Sidebar";
import LatestPropertyCard from "../Cards/LatestPropertyCard";
import Pagination from "../Pagination";
import properties from "../../data/property";
import TableSecretary from "../TableFaculty";

function FacultyGrid() {
  //handle grid style
  const [gridStyle, setGridStyle] = useState("grid");
  const handleGridStyle = (style) => {
    setGridStyle(style);
  };
  //handle page
  const [currentPage, setCurrentPage] = useState(1);
  const totalPage = 24;

  const handelPage = (page) => {
    if (page === "prev") {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    } else if (page === "next") {
      if (currentPage < totalPage) {
        setCurrentPage(currentPage + 1);
      }
    } else {
      setCurrentPage(page);
    }
  };

  return (
    <section className="homec-propertys pd-top-80 pd-btm-80">
      <div className="container">
        <FacultyBar gridStyle={gridStyle} handleGridStyle={handleGridStyle} />
        <div className="row">
          <div className="col-lg-8 col-12">
            <div className="tab-content" id="nav-tabContent">
              {/* <!-- Grid Tab --> */}
              <div
                className="tab-pane fade show active"
                id="homec-grid"
                role="tabpanel"
              >
                <TableSecretary/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FacultyGrid;
