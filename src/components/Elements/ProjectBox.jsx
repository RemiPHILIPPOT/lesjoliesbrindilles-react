import React, { useState } from "react";
import styled from "styled-components";
import FsLightbox from "fslightbox-react";
import ProjectImg1 from "../../assets/img/assetsljb/bouquet-ble-roses.jpeg";
import ProjectImg2 from "../../assets/img/assetsljb/bouquet-roses-veronique.jpg";
import ProjectImg3 from "../../assets/img/assetsljb/centre-de-table-mariage.jpeg";
import ProjectImg4 from "../../assets/img/assetsljb/composition-mariage-pampa.jpg";
import ProjectImg5 from "../../assets/img/assetsljb/suspension-centre-de-table-mariage.jpeg";
import ProjectImg6 from "../../assets/img/assetsljb/coeur-deuil.jpeg";

export default function ProjectBox({ img, title, text, action, alt }) {
  const [toggle, setToggle] = useState(false);

  return (
    <Wrapper>
      <ImgBtn className="aniamte pointer" onClick={() => setToggle(!toggle)}>
        <FsLightbox
          toggler={toggle}
          sources={
            img
              ? [img]
              : [
                  ProjectImg1,
                  ProjectImg2,
                  ProjectImg3,
                  ProjectImg4,
                  ProjectImg5,
                  ProjectImg6,
                ]
          }
        />
        {/* <ImgBtn className="aniamte pointer" onClick={action ? () => action() : null}> */}
        <img className="radius8" src={img} alt={alt}></img>
      </ImgBtn>
      <h3 className="font20 extraBold">{title}</h3>
      <p className="font13">{text}</p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  margin-top: 30px;
  img {
    width: 100%;
    height: 450px;
    margin: 20px 0;
    @media (max-width: 768px) {
      width: 400px;/
    }
  }
  h3 {
    padding-bottom: 10px;
  }
`;

const ImgBtn = styled.button`
  background-color: transparent;
  border: 0px;
  outline: none;
  padding: 0px;
  margin: 0px;
  :hover > img {
    opacity: 0.5;
  }
`;
