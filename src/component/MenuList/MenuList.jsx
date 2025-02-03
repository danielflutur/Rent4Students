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
import { GlobalOutlined } from '@ant-design/icons';

const MenuList = () => {

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
        style={{ color: 'white' }} 
      >
        <Menu.Item key="en" onClick={() => handleLanguageChange('en')}>
          <Flag code="GB" style={{ width: 20, height: 15, marginRight: 10 }} />
          English
        </Menu.Item>
        <Menu.Item key="ro" onClick={() => handleLanguageChange('ro')}>
          <Flag code="RO" style={{ width: 20, height: 15, marginRight: 10 }} />
          Română
        </Menu.Item>
      </Menu.SubMenu>

      <Menu.Item key="home" icon={<HomeOutlined />}>
        <Link to="/">{t("menu.home")}</Link>
      </Menu.Item>

      <Menu.SubMenu
        key="faculty_menu"
        icon={<ShopOutlined />}
        title={t("menu.faculties")}
      >
        <Menu.Item key="add_faculty">
          <Link to="/add-faculty">{t("menu.add_faculty")}</Link>
        </Menu.Item>
        <Menu.Item key="faculty">
          <Link to="/faculty">{t("menu.manage_faculties")}</Link>
        </Menu.Item>
      </Menu.SubMenu>

      <Menu.SubMenu
        key="properties_menu"
        icon={<ShopOutlined />}
        title={t("menu.properties")}
      >
        <Menu.Item key="properties">
          <Link to="/property">{t("menu.properties_list")}</Link>
        </Menu.Item>
        <Menu.Item key="property_single">
          <Link to="/property-single">{t("menu.property_single")}</Link>
        </Menu.Item>
        <Menu.Item key="add_property">
          <Link to="/add-property">{t("menu.add_property")}</Link>
        </Menu.Item>
        <Menu.Item key="dashboard">
          <Link to="/dashboard">{t("menu.dashboard")}</Link>
        </Menu.Item>
        <Menu.Item key="submit_property">
          <Link to="/submit-property">{t("menu.submit_property")}</Link>
        </Menu.Item>
        <Menu.Item key="edit_property">
          <Link to="/edit-property">{t("menu.edit_property")}</Link>
        </Menu.Item>
      </Menu.SubMenu>

      <Menu.SubMenu key="pages" icon={<PushpinOutlined />} title={t("menu.pages")}>
        <Menu.Item key="about">
          <Link to="/about">{t("menu.about_us")}</Link>
        </Menu.Item>
        <Menu.Item key="pricing">
          <Link to="/pricing">{t("menu.pricing")}</Link>
        </Menu.Item>
        <Menu.Item key="payment_method">
          <Link to="/payment-method">{t("menu.payment_method")}</Link>
        </Menu.Item>
        <Menu.Item key="faqs">
          <Link to="/faq">{t("menu.faqs")}</Link>
        </Menu.Item>
        <Menu.Item key="login">
          <Link to="/login">{t("menu.login")}</Link>
        </Menu.Item>
        <Menu.Item key="sign_up">
          <Link to="/signup">{t("menu.signup")}</Link>
        </Menu.Item>
        <Menu.Item key="error_page">
          <Link to="/404">{t("menu.error_page")}</Link>
        </Menu.Item>
      </Menu.SubMenu>

      <Menu.Item key="roommates" icon={<ContactsOutlined />}>
        <Link to="/roommates">{t("menu.roommates")}</Link>
      </Menu.Item>

      <Menu.Item key="renthelp" icon={<ContactsOutlined />}>
      <Link to="/apply-for-rent-help">{t("menu.renthelp")}</Link>
      </Menu.Item>

      <Menu.Item key="mypropertiesowner" icon={<ContactsOutlined />}>
      <Link to="/my-properties-owner">{t("menu.myproperties")}</Link>
      </Menu.Item>


      <Menu.SubMenu key="agents" icon={<ContactsOutlined />} title={t("menu.agents")}>
        <Menu.Item key="our_agent">
          <Link to="/our-agent">{t("menu.our_agent")}</Link>
        </Menu.Item>
        <Menu.Item key="agent_details">
          <Link to="/agent-detail">{t("menu.agent_details")}</Link>
        </Menu.Item>
      </Menu.SubMenu>

      <Menu.SubMenu key="news_menu" icon={<ReadOutlined />} title={t("menu.news")}>
        <Menu.Item key="news">
          <Link to="/blog">{t("menu.news_list")}</Link>
        </Menu.Item>
        <Menu.Item key="news_single">
          <Link to="/blog-single">{t("menu.news_single")}</Link>
        </Menu.Item>
      </Menu.SubMenu>

      <Menu.Item key="contact" icon={<CommentOutlined />}>
        <Link to="/contact">{t("menu.contact")}</Link>
      </Menu.Item>
      
      <Menu.Item key="role_selection">
        <Button>
          <Link to="/role-selection">{t("menu.signup")}</Link>
        </Button>
      </Menu.Item>
    </Menu>
  );
};

export default MenuList;
