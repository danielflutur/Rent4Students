import ProtoTypes from "prop-types";
import { Layout } from "antd";
import Logo from "../Logo/Logo";
import MenuList from "../MenuList/MenuList";

const { Sider } = Layout;
function MobileMenu({ handleSidebar, show }) {
  return (
    <div
      className={`modal offcanvas-modal fade ${show && "show"}`}
      id="offcanvas-modal"
      style={{ display: "block", zIndex: show ? "" : "-1" }}
      aria-modal={true}
      role="dialog"
      onClick={(e) => e.target.role === "dialog" && handleSidebar()}
    >
      <Sider
      trigger={null}
      className="sidenav"
      theme="dark"
    >
      <Logo />
      <MenuList />
    </Sider>
    </div>
  );
}

MobileMenu.propTypes = {
  handleSidebar: ProtoTypes.func.isRequired,
  show: ProtoTypes.bool.isRequired,
};

export default MobileMenu;
