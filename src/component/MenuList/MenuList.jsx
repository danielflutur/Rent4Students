import { Button, Menu } from "antd";
import {
  CommentOutlined,
  ContactsOutlined,
  HomeOutlined,
  PushpinOutlined,
  ReadOutlined,
  ShopOutlined,
} from "@ant-design/icons";
import "../MenuList/MenuList.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Flag from "react-world-flags";
import { GlobalOutlined } from "@ant-design/icons";
import { useAuth } from "../../context/AuthProvider";

const MenuList = () => {
  const { auth, setAuth } = useAuth();
  const { i18n, t } = useTranslation(); // Folosește i18next pentru traducere

  // Funcția care schimbă limba
  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang); // Schimbă limba globală
  };

  return (
    <Menu theme="dark" mode="inline" className="menu-bar">
      <Menu.SubMenu
        key="translate_menu"
        icon={<GlobalOutlined />}
        title={t("menu.translate")}
        style={{ color: "white" }}
      >
        <Menu.Item key="en" onClick={() => handleLanguageChange("en")}>
          <Flag code="GB" style={{ width: 20, height: 15, marginRight: 10 }} />
          English
        </Menu.Item>
        <Menu.Item key="ro" onClick={() => handleLanguageChange("ro")}>
          <Flag code="RO" style={{ width: 20, height: 15, marginRight: 10 }} />
          Română
        </Menu.Item>
      </Menu.SubMenu>

      <Menu.Item key="home" icon={<HomeOutlined />}>
        <Link to="/">{t("menu.home")}</Link>
      </Menu.Item>

      {auth?.role === "University" && (
        <>
          <Menu.Item
            key="add_faculty"
            icon={
              <img
                src="/img/add_faculty.png"
                style={{ width: 20, height: 20 }}
              />
            }
          >
            <Link to="/add-faculty">{t("menu.add_faculty")}</Link>
          </Menu.Item>

          <Menu.Item
            key="faculty"
            icon={
              <img
                src="/img/manage_faculty.png"
                style={{ width: 20, height: 20 }}
              />
            }
          >
            <Link to="/faculty">{t("menu.manage_faculties")}</Link>
          </Menu.Item>
        </>
      )}
      {auth?.role === "PropertyOwner" && (
        <>
          <Menu.Item 
          key="properties"
          icon={
            <img
              src="/img/properties.png"
              style={{ width: 20, height: 20 }}
            />
          }>
            <Link to="/property">{t("menu.properties_list")}</Link>
          </Menu.Item>
          <Menu.Item 
          key="submit_property"
          icon={
            <img
              src="/img/add-property.png"
              style={{ width: 20, height: 20 }}
            />
          }>
            <Link to="/submit-property">{t("menu.add_property")}</Link>
          </Menu.Item>

          <Menu.Item
            key="mypropertiesowner"
            icon={
              <img
                src="/img/my-properties.png"
                style={{ width: 20, height: 20 }}
              />
            }
          >
            <Link to="/my-properties-owner">{t("menu.myproperties")}</Link>
          </Menu.Item>
        </>
      )}

      {auth?.role === "Faculty" && (
        <>
          <Menu.Item
            key="manage-students"
            icon={
              <img
                src="/img/manage_students.png"
                style={{ width: 20, height: 20 }}
              />
            }
          >
            <Link to="/manage-students">{t("menu.manage-students")}</Link>
          </Menu.Item>

          <Menu.Item
            key="manage-students-applications"
            icon={
              <img
                src="/img/manage_documents.png"
                style={{ width: 20, height: 20 }}
              />
            }
          >
            <Link to="/manage-students-applications">
              {t("menu.manage-students-applications")}
            </Link>
          </Menu.Item>

          <Menu.Item
            key="add-documents"
            icon={
              <img
                src="/img/upload_documents.png"
                style={{ width: 20, height: 20 }}
              />
            }
          >
            <Link to="/add-documents">{t("menu.add-documents")}</Link>
          </Menu.Item>
        </>
      )}

      {auth?.role === "Student" && (
        <>
          <Menu.Item 
          key="properties"
          icon={
            <img
              src="/img/properties.png"
              style={{ width: 20, height: 20 }}
            />
          }>
            <Link to="/property">{t("menu.properties_list")}</Link>
          </Menu.Item>
          <Menu.Item
            key="roommates"
            icon={
              <img src="/img/roommate.png" style={{ width: 20, height: 20 }} />
            }
          >
            <Link to="/roommates">{t("menu.roommates")}</Link>
          </Menu.Item>

          <Menu.Item
            key="renthelp"
            icon={
              <img src="/img/request.png" style={{ width: 20, height: 20 }} />
            }
          >
            <Link to="/apply-for-rent-help">{t("menu.renthelp")}</Link>
          </Menu.Item>
        </>
      )}

{!auth && (
  <>
      <Menu.Item
        key="role_selection"
        icon={
          <img
            src="/img/sign-in-role.png"
            style={{ width: 20, height: 20 }}
          />
        }
        style={{ backgroundColor: "#fff", color: "#001529" }}
      >
        <Link to="/role-selection">{t("menu.signup")}</Link>
      </Menu.Item>

      <Menu.Item
        key="login"
        icon={
          <img
            src="/img/sign-in.png"
            style={{ width: 20, height: 20 }}
          />
        }
        style={{ backgroundColor: "#fff", color: "#001529" }}
      >
        <Link to="/app-login">{t("menu.login")}</Link>
      </Menu.Item>
  </>
)}

{auth &&(
  <>
  <Menu.Item
        key="logout"
        icon={
          <img
            src="/img/log-out.png"
            style={{ width: 20, height: 20 }}
          />
        }
        style={{ backgroundColor: "#fff", color: "#001529" }}
        onClick={() => setAuth(null)}
      >
        <Link to="/">{t("menu.logout")}</Link>
      </Menu.Item>
  </>
)}
    </Menu>
  );
};

export default MenuList;
