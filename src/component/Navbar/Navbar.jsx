import { useState } from "react";
import MobileMenu from "../MobileMenu/MobileMenu";
import NavPanel from "../NavPanel/NavPanel";
import { Layout } from "antd";

function Navbar({extendSidebar, collapsed, moveLayout, isMobile}) {
  const [openSidebar, setOpenSidebar] = useState(false);
  
  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };
  return (
    <Layout>
      <MobileMenu handleSidebar={toggleSidebar} show={openSidebar} />
      <NavPanel handleSidebar={toggleSidebar} extendSidebar={extendSidebar} collapsed={collapsed} moveLayout={moveLayout} isMobile={isMobile} />
    </Layout>
  );
}

export default Navbar;
