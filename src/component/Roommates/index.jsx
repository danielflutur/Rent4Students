import Footer from "../Footer";
import DownloadApp from "../DownloadApp";
import Breadcrumbs from "../Breadcrumbs";
import StudentCard from "../Cards/StudentCard";
import Pagination from "../Pagination";
import FaqSection from "../Faq/FaqSection";
import Preloader from "../Loader";
import { useEffect, useState } from "react";
import GoTopBtn from "../Button/GoTopBtn";
import PageLayout from "../PageLayout/PageLayout";
import { useAuth } from "../../context/AuthProvider";
import ApiService from "../../services/ApiService";

function Roommates() {
  const { auth } = useAuth();
  const [currentPage, setCurrentPage] = useState(1);
  const totalPage = 24;
  const [compatibleStudents, setCompatibleStudents] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    ApiService.get(`Students/matching/${auth?.id}`)
      .then((response) => {
        setCompatibleStudents(response.data);
        setisLoading(false);
      })
      .catch((error) => console.error("Error fetching students:", error));
  }, []);

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

  let component = undefined;
  if (isLoading) {
    component = <Preloader />;
  } else {
    component = (
      <>
        <PageLayout>
          <Breadcrumbs
            title="Colegi de apartament"
            titlePosition="bottom"
          ></Breadcrumbs>

          <section className="pd-top-70 pd-btm-100">
            <div className="container">
              <div className="row">
                {compatibleStudents?.map((compatibleStudent) => (
                  <StudentCard
                    key={compatibleStudent.student.id}
                    img={compatibleStudent.student.profilePhoto}
                    phone={compatibleStudent.student.phone}
                    name={`${compatibleStudent.student.firstName} ${compatibleStudent.student.lastName}`}
                    campatibility={compatibleStudent.score}
                    widthClasses="col-lg-3 col-md-6 col-12"
                    classes="homec-agent__grid homec-border mg-top-30"
                    detailsLink={`student-detail/${compatibleStudent.student.id}`}
                  />
                ))}
              </div>
              <div className="row mg-top-40">
                <Pagination
                  totalPage={totalPage}
                  handlePage={handelPage}
                  currentPage={currentPage}
                />
              </div>
            </div>
          </section>

          <FaqSection />
          <DownloadApp />
          <Footer />
          <GoTopBtn />
        </PageLayout>
      </>
    );
  }
  return component;
}

export default Roommates;
