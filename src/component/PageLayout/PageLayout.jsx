import { useEffect, useState } from "react";
import { Layout } from "antd";
import Navbar from "../Navbar/Navbar.jsx";
import "../PageLayout/PageLayout.css";

const PageLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const extendSidebar = () => {
    setCollapsed(!collapsed);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Layout>
      <Navbar extendSidebar={extendSidebar} collapsed={collapsed} />
        <main
        id={isMobile ? "mobileLayout" : "desktopLayout"}
        className={collapsed ? "content-collapsed" : "content-not-collapsed"}
        >
          {children}
        </main>
    </Layout>
  );
};

export default PageLayout;
