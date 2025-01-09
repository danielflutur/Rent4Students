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

const MenuList = () => {
  return (
    <Menu theme="dark" mode="inline" className="menu-bar">
      <Menu.Item key="home" icon={<HomeOutlined />}>
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.SubMenu
        key="faculty_menu"
        icon={<ShopOutlined />}
        title="Facultați"
      >
        <Menu.Item key="add_faculty">
          <Link to="/add-faculty">Adaugă Facultate</Link>
        </Menu.Item>
        <Menu.Item key="faculty">
          <Link to="/faculty">Gestionează Facultăți</Link>
        </Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu
        key="properties_menu"
        icon={<ShopOutlined />}
        title="Properties"
      >
        <Menu.Item key="properties">
          <Link to="/property">Properties</Link>
        </Menu.Item>
        <Menu.Item key="property_single">
          <Link to="/property-single">Property Single</Link>
        </Menu.Item>
        <Menu.Item key="add_property">
          <Link to="/add-property">Add Property</Link>
        </Menu.Item>
        <Menu.Item key="dashboard">
          <Link to="/dashboard">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="submit_property">
          <Link to="/submit-property">Submit Property</Link>
        </Menu.Item>
        <Menu.Item key="edit_property">
          <Link to="/edit-property">Edit Property</Link>
        </Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu key="pages" icon={<PushpinOutlined />} title="Pages">
        <Menu.Item key="about">
          <Link to="/about">About Us</Link>
        </Menu.Item>
        <Menu.Item key="pricing">
          <Link to="/pricing">Pricing</Link>
        </Menu.Item>
        <Menu.Item key="payment_method">
          <Link to="/payment-method">Payment Method</Link>
        </Menu.Item>
        <Menu.Item key="faqs">
          <Link to="/faq">Faq's</Link>
        </Menu.Item>
        <Menu.Item key="login">
          <Link to="/login">Login</Link>
        </Menu.Item>
        <Menu.Item key="sign_up">
          <Link to="/signup">Signup</Link>
        </Menu.Item>
        <Menu.Item key="error_page">
          <Link to="/404">Error Page</Link>
        </Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu key="agents" icon={<ContactsOutlined />} title="Agents">
        <Menu.Item key="our_agent">
          <Link to="/our-agent">Our Agent</Link>
        </Menu.Item>
        <Menu.Item key="agent_details">
          <Link to="/agent-detail">Agent Details</Link>
        </Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu key="news_menu" icon={<ReadOutlined />} title="News">
        <Menu.Item key="news">
          <Link to="/blog">News</Link>
        </Menu.Item>
        <Menu.Item key="news_single">
          <Link to="/blog-single">News Single</Link>
        </Menu.Item>
      </Menu.SubMenu>
      <Menu.Item key="contact" icon={<CommentOutlined />}>
        <Link to="/contact">Contact</Link>
      </Menu.Item>
      <Menu.Item key="validate-phone" icon={<CommentOutlined />}>
        <Link to="/validate-phone">Validate Phone Number</Link>
      </Menu.Item>
      <Menu.Item key="role_selection">
        <Button>
          <Link to="/role-selection">Sign Up</Link>
        </Button>
      </Menu.Item>
    </Menu>
  );
};

export default MenuList;
