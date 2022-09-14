import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Assets
import CloseIcon from "../../assets/svg/CloseIcon";
import Logo2 from "../../assets//Les Jolies Brindilles-2.svg";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import CheckOpenStatus from "../Elements/CheckOpenStatus";
import PhoneIcon from "@mui/icons-material/Phone";

export default function Sidebar({ sidebarOpen, toggleSidebar }) {
  return (
    <Wrapper className="animate burgundyBg" sidebarOpen={sidebarOpen}>
      <SidebarHeader className="flexSpaceCenter">
        <div className="flexNullCenter">
          <img
            style={{ width: "300px", fill: "white" }}
            src={Logo2}
            alt="Logo les jolies brindilles fleuriste passionnée"
          />

          {/* <h1 className="whiteColor font20" style={{ marginLeft: "15px" }}>
            Les Jolies Brindilles
          </h1> */}
        </div>
        <CloseBtn
          onClick={() => toggleSidebar(!sidebarOpen)}
          className="animate pointer"
        >
          <CloseIcon />
        </CloseBtn>
      </SidebarHeader>

      <UlStyle className="flexNullCenter flexColumn">
        <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="activePink"
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="home"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Accueil
          </Link>
        </li>
        {/* <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="services"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Services
          </Link>
        </li> */}
        <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="activePink"
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="projects"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Créations
          </Link>
        </li>
        {/* <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="blog"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Blog
          </Link>
        </li> */}
        {/* <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="pricing"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Pricing
          </Link>
        </li> */}
        <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="activePink"
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="contact"
            spy={true}
            smooth={true}
            offset={-760}
          >
            Contact
          </Link>
        </li>
      </UlStyle>
      <UlStyle className="flexSpaceCenter">
        <li className="semiBold font15 pointer flexCenter">
          <a
            href="https://www.facebook.com/lesjoliesbrindilles/"
            className="radius8 lightBg"
            style={{ padding: "5px 10px" }}
          >
            <FacebookIcon />
          </a>
        </li>
        <li className="semiBold font15 pointer flexCenter">
          <a
            href="https://www.instagram.com/lesjoliesbrindilles/"
            className="radius8 lightBg"
            style={{ padding: "5px 10px", marginLeft: "10px" }}
          >
            <InstagramIcon />
          </a>
        </li>
        <li className="semiBold font15 pointer flexCenter">
          <a
            href="tel:+33658784107"
            className="radius8 lightBg"
            style={{ padding: "5px 10px", marginLeft: "10px" }}
          >
            <PhoneIcon />
          </a>
        </li>
        <li
          className="semiBold font20 flexCenter radius8 lightBg"
          style={{ padding: "5px 10px", marginLeft: "10px" }}
        >
          <CheckOpenStatus />
        </li>
        {/* <li className="semiBold font15 pointer">
          <a href="/" style={{ padding: "10px 30px 10px 0" }} className="whiteColor">
            Log in
          </a>
        </li>
        <li className="semiBold font15 pointer flexCenter">
          <a href="/" className="radius8 lightBg" style={{ padding: "10px 15px" }}>
            Get Started
          </a>
        </li> */}
      </UlStyle>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  width: 400px;
  height: 100vh;
  position: fixed;
  top: 0;
  padding: 0 30px;
  right: ${(props) => (props.sidebarOpen ? "0px" : "-500px")};
  z-index: 9999;
  @media (max-width: 400px) {
    width: 100%;
  }
`;
const SidebarHeader = styled.div`
  padding: 20px 0;
`;
const CloseBtn = styled.button`
  border: 0px;
  outline: none;
  background-color: transparent;
`;
const UlStyle = styled.ul`
  padding: 40px;
  li {
    margin: 20px 0;
  }
`;
