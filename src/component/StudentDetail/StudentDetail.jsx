import DownloadApp from "../DownloadApp";
import Footer from "../Footer";
import HistoryLinks from "../Breadcrumbs/HistoryLinks";
import Breadcrumbs from "../Breadcrumbs";
import GoTopBtn from "../Button/GoTopBtn";
import PropertyAgents from "../Agents/PropertyAgents";
import { useEffect, useState } from "react";
import Pagination from "../Pagination";
import LatestPropertyCard from "../Cards/LatestPropertyCard";
import PropertyBar from "../Property/PropertyBar";
import Preloader from "../Loader";
import PageLayout from "../PageLayout/PageLayout";
import ProfileStudent from "../Students/ProfileStudent";
import StudentDetailCard from "../Cards/StudentDetailCard";

function StudentDetail() {
  // handle gridStyle
  const [gridStyle, setGridStyle] = useState("grid");
  const handleGridStyle = (style) => {
    setGridStyle(style);
  };

  // handle Page
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

  // Loading Handler
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false);
  }, []);

  let component = undefined;
  if (isLoading) {
    component = <Preloader />;
  } else {
    const propertyData = [
      {
        img: "https://placehold.co/350x220",
        agentName: "Wade Wirren",
        agentImg: "https://placehold.co/35x35",
        price: 3976,
        period: "month",
        name: "Northwest Office Space",
        address: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
        detailsList: [
          { img: "img/room-icon.svg", name: "3 Room" },
          { img: "img/bath-icon.svg", name: "2 Bathroom" },
          { img: "img/size-icon.svg", name: "5x9 m2" },
        ],
      },
      {
        img: "https://placehold.co/350x220",
        agentName: "Wade Wirren",
        agentImg: "https://placehold.co/35x35",
        price: 3976,
        period: "month",
        name: "Countryside Lake View...",
        address: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
        detailsList: [
          { img: "img/room-icon.svg", name: "3 Room" },
          { img: "img/bath-icon.svg", name: "2 Bathroom" },
          { img: "img/size-icon.svg", name: "5x9 m2" },
        ],
      },
      {
        img: "https://placehold.co/350x220",
        agentName: "Wade Wirren",
        agentImg: "https://placehold.co/35x35",
        price: 3976,
        period: "month",
        name: "Brand New Shopping Mall",
        address: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
        detailsList: [
          { img: "img/room-icon.svg", name: "3 Room" },
          { img: "img/bath-icon.svg", name: "2 Bathroom" },
          { img: "img/size-icon.svg", name: "5x9 m2" },
        ],
      },
      {
        img: "https://placehold.co/350x220",
        agentName: "Wade Wirren",
        agentImg: "https://placehold.co/35x35",
        price: 3976,
        period: "month",
        name: "Affordable Green Villa House",
        address: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
        detailsList: [
          { img: "img/room-icon.svg", name: "3 Room" },
          { img: "img/bath-icon.svg", name: "2 Bathroom" },
          { img: "img/size-icon.svg", name: "5x9 m2" },
        ],
      },
      {
        img: "https://placehold.co/350x220",
        agentName: "Wade Wirren",
        agentImg: "https://placehold.co/35x35",
        price: 3976,
        period: "month",
        name: "Diamond Manco Apartment",
        address: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
        detailsList: [
          { img: "img/room-icon.svg", name: "3 Room" },
          { img: "img/bath-icon.svg", name: "2 Bathroom" },
          { img: "img/size-icon.svg", name: "5x9 m2" },
        ],
      },
      {
        img: "https://placehold.co/350x220",
        agentName: "Wade Wirren",
        agentImg: "https://placehold.co/35x35",
        price: 3976,
        period: "month",
        name: "Countryside Modern Lake",
        address: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
        detailsList: [
          { img: "img/room-icon.svg", name: "3 Room" },
          { img: "img/bath-icon.svg", name: "2 Bathroom" },
          { img: "img/size-icon.svg", name: "5x9 m2" },
        ],
      },
    ];

    component = (
      <>
        <PageLayout>
          <Breadcrumbs title="Detali Student" titlePosition="bottom">
          </Breadcrumbs>
          <section className="pd-top-70 pd-btm-100">
            <div className="container">
              <div className="row">
                <StudentDetailCard
                  image="img/profile_picture_big.png"
                  name="Ignatescu Alice"
                  position="Student"
                  contactNumber="0734785267"
                  email="ignatescu.alice@student.usv.ro"
                  location="2972 Westheimer Rd. Santa Ana, Illinois 85486"
                  phone="#"
                  linkedin="#"
                  twitter="#"
                  instagram="#"
                  text="There are many variations of passages of Lorem Ipsum available, but the majority to have suffered alteration in some form, by injected humor. Ipsum available, but the a majority have suffered alteration in some form."
                />
                <ProfileStudent
                  image="img/profile_picture.png"
                  name="Ignatescu Alice"
                />
              </div>
             
            </div>
          </section>
          <GoTopBtn />
        </PageLayout>
      </>
    );
  }

  return component;
}

export default StudentDetail;
