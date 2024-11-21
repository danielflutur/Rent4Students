import Logo from "../Logo/Logo";
import MenuList from "../MenuList/MenuList";
import { Layout } from "antd";
import "../SideNavbar/SideNavbar.css";
import ExtendSidebarButton from "../ExtendSidebarButton/ExtendSidebarButton";

const { Sider } = Layout;
const SideNavbar = ({ extendSidebar, collapsed }) => {
  return (
    <Layout>
      <Sider
        collapsed={collapsed}
        collapsible
        trigger={null}
        id="sidenav"
        theme="dark"
      >
        <Logo />
        <MenuList />
        <ExtendSidebarButton
          collapsed={collapsed}
          extendSidebar={extendSidebar}
        />
      </Sider>
    </Layout>
  );
};

export default SideNavbar;
