import Breadcrumbs from "../Breadcrumbs";
import GoTopBtn from "../Button/GoTopBtn";
import { useEffect, useState } from "react";
import Preloader from "../Loader";
import PageLayout from "../PageLayout/PageLayout";
import ProfileStudent from "../Students/ProfileStudent";
import StudentDetailCard from "../Cards/StudentDetailCard";
import { useParams } from "react-router-dom";
import ApiService from "../../services/ApiService";
import { attributes } from "../../data/attributes";
import { hobbies } from "../../data/hobbies";
import { allergies } from "../../data/allergies";

function StudentDetail() {
  const { id } = useParams(); // Extract id from the route
  const [isLoading, setIsLoading] = useState(true);
  const [student, setStudent] = useState(null);
  const [studentAttributes, setStudentAttributes] = useState([]);
  const [studentHobbies, setStudentHobbies] = useState([]);
  const [studentAllergies, setStudentAllergies] = useState([]);

  useEffect(() => {
    ApiService.get(`Students/${id}`)
      .then((response) => {
        setStudent(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching student data:", error);
      });
  }, [id]);

  useEffect(() => {
    if (student) {
      // Filter and format attributes
      const filteredAttributes = attributes
        .filter((attribute) => student.attributesIds.includes(attribute.id))
        .map((attribute) => `${attribute.name}: ${attribute.value}`);

      setStudentAttributes(filteredAttributes);

      // Filter and format hobbies
      const filteredHobbies = hobbies
        .filter((hobby) => student.hobbiesIds.includes(hobby.id))
        .map((hobby) => hobby.value);

      setStudentHobbies(filteredHobbies);

      // Filter and format allergies
      const filteredAllergies = allergies
        .filter((allergy) => student.allergiesIds.includes(allergy.id))
        .map((allergy) => allergy.value);

      setStudentAllergies(filteredAllergies);
    }
  }, [student]);

  // Format text for StudentDetailCard
  const formatStudentDetails = () => {
    return (
      <>
        {studentAttributes.length > 0 && (
          <>
            <strong>Atribute:</strong>
          <ul style={{ marginBottom: "10px", paddingLeft: "20px" }}>
            {studentAttributes.map((attr, index) => (
              <li key={index}>{attr}</li>
            ))}
          </ul>
          </>
        )}
  
        {studentHobbies.length > 0 && (
          <>
            <strong>Hobby-uri:</strong> {studentHobbies.join(", ")} <br />
          </>
        )}
  
        {studentAllergies.length > 0 && (
          <>
            <strong>Alergii:</strong> {studentAllergies.join(", ")} <br />
          </>
        )}
      </>
    );
  };
  

  return isLoading ? (
    <Preloader />
  ) : (
    <PageLayout>
      <Breadcrumbs title="Detali Student" titlePosition="bottom" />
      <section className="pd-top-70 pd-btm-100">
        <div className="container">
          <div className="row">
            <StudentDetailCard
              image={student?.profilePhoto}
              name={`${student?.firstName} ${student?.lastName}`}
              position="Student"
              contactNumber={student.phone}
              email={student.email}
              location={`${student.address.addressDetails}, ${student.address.city}, ${student.address.county}`}
              phone="#"
              linkedin="#"
              twitter="#"
              instagram="#"
              text={formatStudentDetails()}
            />
            <ProfileStudent />
          </div>
        </div>
      </section>
      <GoTopBtn />
    </PageLayout>
  );
}

export default StudentDetail;
