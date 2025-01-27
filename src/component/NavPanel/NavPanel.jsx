import { useEffect, useState } from "react";
import { Layout, Button } from "antd";
import Logo from "../Logo/Logo";
import "../NavPanel/NavPanel.css";
import { MenuOutlined } from "@ant-design/icons";
import SideNavbar from "../SideNavbar/SideNavbar";

const { Header } = Layout;
const NavPanel = ({ handleSidebar, extendSidebar, collapsed }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [language, setLanguage] = useState("en");

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    // Poți adăuga logica necesară pentru a schimba limba aplicației, de exemplu actualizarea unui context sau apelarea unui API
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Layout>
      {isMobile ? (
        <Header className="titlebar">
          <Logo />
          <Button
            type="button"
            className="extend-menu"
            data-bs-toggle="modal"
            data-bs-target="#offcanvas-modal"
            onClick={handleSidebar}
            aria-label="toggle modal"
          >
            <MenuOutlined />
          </Button>
        </Header>
      ) : (
        <SideNavbar extendSidebar={extendSidebar} collapsed={collapsed} />
      )}
    </Layout>
  );
};

export default NavPanel;
