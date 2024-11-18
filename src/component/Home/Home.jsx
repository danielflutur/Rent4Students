import { useEffect, useState } from "react";
import Footer from "../Footer";
import GoTopBtn from "../Button/GoTopBtn";
import About from "../About/About";
import Agents from "../Agents";
import Blog from "../Blog";
import DownloadApp from "../DownloadApp";
import Features from "../Features";
import HomecHero from "../HomecHero";
import LatestProperty from "../LatestProperty";
import PropertyListing from "../PropertyListing";
import Preloader from "../Loader";
import FaqSection from "../Faq/FaqSection";
import { Layout, Button } from "antd";
import Logo from "../Logo/Logo";
import MenuList from "../MenuList/MenuList";
import {MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons"
import "../Home/Home.css"

const { Header, Sider } = Layout;
function Home() {
  const [isLoading, setisLoadingg] = useState(true);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    setisLoadingg(false);
  }, []);

  let component = undefined;
  if (isLoading) {
    component = <Preloader />;
  } else {
    component = (
      <>
        <Layout>
          <Sider
            collapsed={collapsed}
            collapsible
            trigger={null}
            className="sidenav"
            theme="dark"
          >
            <Logo />
            <MenuList />
          </Sider>
          <Layout>
            <Header
              style={{
                padding: 0,
                background: '#fff',
              }}
            >
              <Button
                type="text"
                className="toggle"
                onClick={() => setCollapsed(!collapsed)}
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              />
            </Header>
            <HomecHero />
            <PropertyListing />
            <About />
            <LatestProperty />
            <Features />
            <Agents />
            <FaqSection />
            <DownloadApp />
            <Blog />
            <Footer />
            <GoTopBtn />
          </Layout>
        </Layout>
      </>
    );
  }
  return component;
}

export default Home;
