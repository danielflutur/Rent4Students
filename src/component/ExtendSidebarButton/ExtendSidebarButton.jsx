import React from "react";
import { Button } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import "../ExtendSidebarButton/ExtendSidebarButton.css"

const ExtendSidebarButton = ({ collapsed, extendSidebar }) => {
  return (
    <div className="toggle-btn">
      <Button
        type="text"
        className="toggle"
        onClick={extendSidebar}
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      />
    </div>
  );
};

export default ExtendSidebarButton;
