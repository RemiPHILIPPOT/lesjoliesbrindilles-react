import React from "react";
import styled from "styled-components";
// Components
import ProjectBox from "../Elements/ProjectBox";
import FullButton from "../Buttons/FullButton";
// Assets
import ProjectImg1 from "../../assets/img/assetsljb/bouquet-ble-roses.jpeg";
import ProjectImg2 from "../../assets/img/assetsljb/bouquet-roses-veronique.jpg";
import ProjectImg3 from "../../assets/img/assetsljb/centre-de-table-mariage.jpeg";
import ProjectImg4 from "../../assets/img/assetsljb/composition-mariage-pampa.jpg";
import ProjectImg5 from "../../assets/img/assetsljb/suspension-centre-de-table-mariage.jpeg";
import ProjectImg6 from "../../assets/img/assetsljb/coeur-deuil.jpeg";
import { AddressMap } from "../Elements/AdressMaps";
import Lightbox from "../Elements/Lightbox";





export default function Projects() {
  return (

    <Wrapper id="projects">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Créations</h1>
            <p className="font13">
              Vous pouvez retrouver plus de réalisations sur mes réseaux sociaux
            </p>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
            
              <ProjectBox
                img={ProjectImg1}
                title="Bouquet de Mariée"
                text="Mariage de E&A thème champêtre"
                alt="Bouquet de mariage"
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg2}
                title="Bouquet"
                text="Commande pour un anniversaire de mariage"
                alt="Bouquet anniversaire de mariage"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg3}
                title="Centre de table"
                text="Mariage de E&B thème bohème chic"
                alt="centre de table mariage"
                action={() => alert("clicked")}
              />
            </div>
          </div>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg4}
                title="Arche Cérémonie Laïque"
                text="Mariage de E&B thème bohème chic"
                alt="Arche mariage fleurs "
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg5}
                title="Centre de table des mariés"
                text="Mariage de E&B thème bohème chic"
                alt="centre de table mariage"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg6}
                title="Composition de deuil"
                text="Commande d'un coeur de roses rouges et blanches"
                alt="Composition de deuil fleurie"
                action={() => alert("clicked")}
              />
            </div>
          </div>
          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
            <FullButton
                    title="En voir plus"
                    onclick={(e) => {<Lightbox />}}
                  />
            </div>
          </div>
        </div>
      </div>
      <div className="lightBg">
        <div className="container">
          <Advertising className="flexSpaceCenter">
            <AddLeft>
              <AddLeftInner>
                <ImgWrapper className="flexCenter">
                  <AddressMap />
                </ImgWrapper>
              </AddLeftInner>
            </AddLeft>
            <AddRight>
              {/* <h4 className="font15 semiBold">Horaires d'Ouverture</h4> */}
              <h2 className="font40 extraBold">Du Mardi au Samedi <br /> 10h-12h30 15h-19h</h2>
              <h2 className="font40 extraBold">Le Dimanche <br />10h-13h</h2>
              <p className="font12">
                En dehors de ces horaires, vous pouvez toujours nous joindre sur les réseaux sociaux, par mail ou via le formulaire.
              </p>
              <ButtonsRow
                className="flexNullCenter"
                style={{ margin: "30px 0" }}
              >
                <div style={{ width: "190px" }}>
                  <FullButton
                    title="Je réserve mon bouquet "
                    action={() => alert("clicked")}
                  />
                </div>
              
              </ButtonsRow>
            </AddRight>
          </Advertising>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  padding: 100px 0;
  margin: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 60px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  position: relative;
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
  }
`;
const AddLeftInner = styled.div`
  width: 100%;
  position: absolute;
  top: -300px;
  left: 0;
  @media (max-width: 1190px) {
    top: -250px;
  }
  @media (max-width: 920px) {
    top: -200px;
  }
  @media (max-width: 860px) {
    order: 1;
    position: relative;
    top: -60px;
    left: 0;
  }
`;
const ImgWrapper = styled.div`
  width: 100%;
  padding: 0 15%;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
`;
