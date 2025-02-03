import StudentCardV2 from "../Cards/StudentCardV2";
import AboutShapeImg from "../About/AboutShapeImg";
import { CompatibleStudentsContext } from "../../context/CompatibleStudentsProvider";
import { useContext, useEffect, useState } from "react";
import Preloader from "../Loader";

function Students() {
  const compatibleStudents = useContext(CompatibleStudentsContext);
  const [isLoading, setisLoadingg] = useState(true);

  useEffect(() => {
    if (compatibleStudents && compatibleStudents.length > 0) {
      setisLoadingg(false);
    }
  }, [compatibleStudents]);

  let component = undefined;
  if (isLoading) {
    component = <Preloader />;
  } else {
    component = (
      <section className="homec-about homec-bg-third-color pd-top-120 pd-btm-120">
        <div className="homec-shape">
          <AboutShapeImg img="img/anim-shape-1.svg" design="homec-shape-1" />
          <AboutShapeImg img="img/anim-shape-2.svg" design="homec-shape-2" />
          <AboutShapeImg img="img/anim-shape-3.svg" design="homec-shape-3" />
          <AboutShapeImg img="img/anim-shape-1.svg" design="homec-shape-1" />
          <AboutShapeImg img="img/anim-shape-2.svg" design="homec-shape-2" />
          <AboutShapeImg img="img/anim-shape-3.svg" design="homec-shape-3" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-12">
              <div className="homec-section__head text-center mg-btm-30">
                <span
                  className="homec-section__badge homec-section__badge--small homec-primary-color m-0"
                  data-aos="fade-in"
                  data-aos-delay="300"
                >
                  Vezi toti cei 227 de studenti
                </span>
                <h2
                  className="homec-section__title"
                  data-aos="fade-in"
                  data-aos-delay="400"
                >
                  Cunoasteti potentialii colegi de apartament
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            {compatibleStudents?.map((compatibleStudent) => (
              <StudentCardV2
                key={compatibleStudent.student.id}
                img={compatibleStudent.student.profilePhoto}
                name={`${compatibleStudent.student.firstName} ${compatibleStudent.student.lastName}`}
                campatibility={compatibleStudent.score}
                detailsLink={`student-detail/${compatibleStudent.student.id}`}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
  return component;
}
export default Students;
