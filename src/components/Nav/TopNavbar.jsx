import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Components
import Sidebar from "../Nav/Sidebar";
import Backdrop from "../Elements/Backdrop";
// Assets
import BurgerIcon from "../../assets/svg/BurgerIcon";
import Logo from "../../assets//logo.svg";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import CheckOpenStatus from "../Elements/CheckOpenStatus";

export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper
        className="flexCenter animate whiteBg"
        style={y > 100 ? { height: "100px" } : { height: "110px" }}
      >
        <NavInner className="container flexSpaceCenter">
          <Link className="pointer flexNullCenter" to="home" smooth={true}>
            <img
              style={{ width: "300px" }}
              src={Logo}
              alt="Logo les jolies brindilles fleuriste passionnée"
            />
            
          </Link>
          <BurderWrapper
            className="pointer"
            onClick={() => toggleSidebar(!sidebarOpen)}
          >
            <BurgerIcon />
          </BurderWrapper>
          <UlWrapper className="flexNullCenter">
            <li className="semiBold font18 pointer">
              <Link
                activeClass="active"
                style={{ padding: "10px 15px" }}
                to="home"
                spy={true}
                smooth={true}
                offset={-80}
              >
                Accueil
              </Link>
            </li>
            {/* <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="services" spy={true} smooth={true} offset={-80}>
                Mes réalisations
              </Link>
            </li> */}
            <li className="semiBold font18 pointer">
              <Link
                activeClass="active"
                style={{ padding: "10px 15px" }}
                to="projects"
                spy={true}
                smooth={true}
                offset={-80}
              >
                Créations
              </Link>
            </li>
            {/* <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="blog" spy={true} smooth={true} offset={-80}>
                Blog
              </Link>
            </li> */}
            {/* <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="pricing" spy={true} smooth={true} offset={-80}>
                Pricing
              </Link>
            </li> */}
            <li className="semiBold font18 pointer">
              <Link
                activeClass="active"
                style={{ padding: "10px 15px" }}
                to="contact"
                spy={true}
                smooth={true}
                offset={-80}
              >
                Contact
              </Link>
            </li>
          </UlWrapper>
          <UlWrapperRight className="flexNullCenter">
            <li className="semiBold font20 pointer flexCenter">
              <a
                href="#contact"
                className="openStatus radius8 lightBg"
                style={{ padding: "5px 10px", marginRight: "10px" }}
              >
                <CheckOpenStatus />
              </a>
            </li>

            <li className="semiBold font15 pointer flexCenter">
              <a
                href="tel:+33658784107"
                className="radius8 lightBg"
                style={{ padding: "5px 10px", marginRight: "10px" }}
              >
                <PhoneIcon />
              </a>
            </li>
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
          </UlWrapperRight>
        </NavInner>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;
const NavInner = styled.div`
  position: relative;
  height: 100%;
`;
const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`;
const UlWrapper = styled.ul`
  display: flex;
  @media (max-width: 760px) {
    display: none;
  }
`;
const UlWrapperRight = styled.ul`
  @media (max-width: 760px) {
    display: none;
  }
`;
