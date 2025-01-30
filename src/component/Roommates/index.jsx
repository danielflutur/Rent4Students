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
import students from "../../data/students";

function Roommates() {
  // page handle
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

  // loading handle
  const [isLoading, setisLoadingg] = useState(true);
  useEffect(() => {
    setisLoadingg(false);
  }, []);

  let component = undefined;
  if (isLoading) {
    component = <Preloader />;
  } else {
    component = (
      <>
        <PageLayout>
          <Breadcrumbs title="Colegi de apartament" titlePosition="bottom">
          </Breadcrumbs>

          <section className="pd-top-70 pd-btm-100">
            <div className="container">
              <div className="row">
                {students?.map((student) => (
                  <StudentCard
                    key={student.id}
                    img={student.img3}
                    phone={student.phone}
                    linkedin={student.linkedin}
                    twitter={student.twitter}
                    insta={student.insta}
                    name={student.name}
                    campatibility={student.campatibility}
                    desc={student.position}
                    widthClasses="col-lg-3 col-md-6 col-12"
                    classes="homec-agent__grid homec-border mg-top-30"
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
