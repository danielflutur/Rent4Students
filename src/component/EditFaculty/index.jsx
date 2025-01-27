import { useParams } from 'react-router-dom';
import Breadcrumbs from "../Breadcrumbs";
import Footer from "../Footer";
import Preloader from "../Loader";
import { useEffect, useState } from "react";
import GoTopBtn from "../Button/GoTopBtn";
import PageLayout from "../PageLayout/PageLayout";
import FacultyFrom from "../Form/FacultyFrom";
import EditFacultyFrom from '../Form/EditFacultyFrom';

function EditFaculty() {
  const { id } = useParams();  // Capture the faculty ID from the URL
  console.log(id);  // You can now fetch or display the data corresponding to this ID

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false);
    // You could fetch faculty data here using the ID
  }, [id]);

  let component = undefined;
  if (isLoading) {
    component = <Preloader />;
  } else {
    component = (
      <PageLayout>
        <Breadcrumbs
          title="Editează Facultate"
          titlePosition="bottom"
          background="url(img/bread-overlay.jpg)"
        />
        <EditFacultyFrom facultyId={id} />  {/* Optionally pass the ID to the form */}
        <Footer />
        <GoTopBtn />
      </PageLayout>
    );
  }

  return component;
}

export default EditFaculty;
