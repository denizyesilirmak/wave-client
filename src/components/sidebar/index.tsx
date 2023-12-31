import React from "react";
import "./styles.css";

import WaveLogo from "@assets/images/logo-small.png";

import { ReactComponent as Logout } from "@assets/icons/logout.svg";

import { SIDEBAR_MENU } from "./constant";
import { useNavigate } from "react-router-dom";
import { useSocketConnected } from "@/store/app.store";
import { useTranslation } from "react-i18next";
import { SidebarItem } from "./types";

const Sidebar: React.FC = () => {
  const [active, setActive] = React.useState(0);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const socketConnected = useSocketConnected();

  const handleClick = (item: SidebarItem, index: number) => {
    setActive(index);
    navigate(item.link);
  };

  return (
    <div className="sidebar-container">
      <div className="sidebar-header">
        <img
          src={WaveLogo}
          alt="Wave Logo"
          className={`sidebar-logo ${socketConnected ? "active" : "passive"}`}
        />
      </div>
      <div className="sidebar-content">
        {SIDEBAR_MENU.map((item, index) => (
          <div
            className={`sidebar-item ${active === index ? "selected" : ""}`}
            key={index}
            onClick={() => handleClick(item, index)}
          >
            <item.icon />
            <span className="sidebar-item-label">{t(item.title)}</span>
          </div>
        ))}
      </div>
      <div className="sidebar-footer">
        <div className="sidebar-item" onClick={() => navigate("login")}>
          <Logout />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
