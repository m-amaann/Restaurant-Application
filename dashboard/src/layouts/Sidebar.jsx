import React, { useState } from "react";
import { Button, Nav, NavItem, Collapse } from "reactstrap";
import { Link, useLocation } from "react-router-dom";

import profileImage from "../assets/images/Profile.png";

const navigation = [
  {
    title: "Dashboard",
    href: "/starter",
    icon: "bi bi-speedometer2",
  },
  {
    title: "Orders",
    href: "/orders",
    icon: "bi bi-cart",
  },
  {
    title: "Menu",
    href: "/menus",
    icon: "bi bi-box",
  },
  {
    title: "Category",
    href: "/category",
    icon: "bi bi-list",
    subcategories: [
      { title: "Sub-category", href: "/subcategory1" },
    ],
  },
  {
    title: "Users",
    href: "/users",
    icon: "bi bi-people",
  },
  {
    title: "Admin",
    href: "/admin",
    icon: "bi bi-person-circle",
  },
  {
    title: "Settings",
    href: "/settings",
    icon: "bi bi-gear",
  },
  {
    title: "Alert",
    href: "/alerts",
    icon: "bi bi-bell",
  },
  {
    title: "Badges",
    href: "/badges",
    icon: "bi bi-patch-check",
  },
  {
    title: "Buttons",
    href: "/buttons",
    icon: "bi bi-hdd-stack",
  },
  {
    title: "Cards",
    href: "/cards",
    icon: "bi bi-card-text",
  },
  {
    title: "Grid",
    href: "/grid",
    icon: "bi bi-columns",
  },
  {
    title: "Forms",
    href: "/forms",
    icon: "bi bi-textarea-resize",
  }
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  let location = useLocation();

  const toggleCategoryDropdown = () => {
    setIsOpen(!isOpen);
  };

  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };

  return (
    <div className="bg-dark">
      <div className="d-flex">
        <Button
          color="white"
          className="ms-auto text-white d-lg-none"
          onClick={() => showMobilemenu()}
        >
          <i className="bi bi-x"></i>
        </Button>
      </div>
      <div className="pl-3 mt-2">
        <Nav vertical className="sidebarNav">
          {navigation.map((navi, index) => (
            <React.Fragment key={index}>
              {navi.subcategories ? (
                <React.Fragment>
                  <NavItem className="sidenav-bg">
                    <Link
                      to="#"
                      onClick={toggleCategoryDropdown}
                      className={
                        isOpen && location.pathname.startsWith(navi.href)
                          ? "active nav-link py-3"
                          : "nav-link py-3"
                      }
                    >
                      <i className={navi.icon}></i>
                      <span className="ms-3 d-inline-block">{navi.title}</span>
                    </Link>
                  </NavItem>
                  <Collapse isOpen={isOpen} className="category-dropdown">
                    {navi.subcategories.map((subcategory, subIndex) => (
                      <NavItem key={subIndex} className="sidenav-bg">
                        <Link
                          to={subcategory.href}
                          className={
                            location.pathname === subcategory.href
                              ? "active nav-link py-3"
                              : "nav-link py-3"
                          }
                        >
                          <span className="ms-4 d-inline-block">
                            {subcategory.title}
                          </span>
                        </Link>
                      </NavItem>
                    ))}
                  </Collapse>
                </React.Fragment>
              ) : (
                <NavItem className="sidenav-bg">
                  <Link
                    to={navi.href}
                    className={
                      location.pathname === navi.href
                        ? "active nav-link py-3"
                        : "nav-link py-3"
                    }
                  >
                    <i className={navi.icon}></i>
                    <span className="ms-3 d-inline-block">{navi.title}</span>
                  </Link>
                </NavItem>
              )}
            </React.Fragment>
          ))}
        </Nav>
        <div className="profile-section">
          <img src={profileImage} alt="Profile" />
          <div className="user-info">
            <span>Administrator</span>
            <span>seaking@example.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
