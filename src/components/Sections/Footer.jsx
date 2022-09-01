import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Assets
import Logo from "../../assets//logo.svg";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function Contact() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <Wrapper>
      <div className="darkBg">
        <div className="container">
          <InnerWrapper
            className="flexSpaceCenter"
            style={{ padding: "30px 0" }}
          >
            <Link
              className="flexCenter animate pointer"
              to="home"
              smooth={true}
              offset={-80}
            >
              {/* <LogoImg /> */}
              <img
                style={{ width: "350px" }}
                src={Logo}
                alt="Logo les jolies brindilles fleuriste passionnée"
              />
            </Link>
            <StyleP className="whiteColor font13">
              © {getCurrentYear()} -{" "}
              <span className="purpleColor font13">Les Jolies Brindilles</span> All Right
              Reserved
            </StyleP>

            <Link
              className="whiteColor animate pointer font13"
              to="home"
              smooth={true}
              offset={-80}

            >
              <ArrowUpwardIcon sx={{color:'rgb(120, 70, 85)'}} />
            </Link>
          </InnerWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const InnerWrapper = styled.div`
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
const StyleP = styled.p`
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;
