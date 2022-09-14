import React from "react";
import styled from "styled-components";
// Components
import FullButton from "../Buttons/FullButton";
// Assets
import HeaderImage from "../../assets/img/magasin2.jpeg";

export default function Header() {
  return (
    <Wrapper id="home" className="container flexSpaceCenter">
      <LeftSide className="flexCenter">
        <div>
          <h1 className="extraBold font60">Fleuriste Passionnée</h1>
          <HeaderP className="font13 semiBold">
            Installer à Aigrefeuille d'Aunis, je saurai vous conseiller pour
            embellir chaque instant de vos vies. Je vous propose la création de
            compositions et de bouquets sur mesure ainsi que la livraison de vos
            commandes.
          </HeaderP>
          {/* <BtnWrapper>
            <a href="tel:+33658784107"><FullButton  title="Appelez-moi" /></a>
          </BtnWrapper> */}
          <BtnWrapper>
            <a href="tel:+33658784107"><FullButton  title="Passer commande" /></a>
          </BtnWrapper>
        </div>
      </LeftSide>
      <RightSide>
        <ImageWrapper>
          <Img
            className="radius8"
            src={HeaderImage}
            alt="Interieur Magasin Fleuriste Aigrefeuille d'Aunis"
            style={{ zIndex: 9 }}
          />
        </ImageWrapper>
      </RightSide>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding-top: 90px;
  width: 100%;
  min-height: 840px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`;
const RightSide = styled.div`
  width: 70%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 50px;
  }
`;
const HeaderP = styled.div`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
`;
const BtnWrapper = styled.div`
  max-width: 190px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 9;
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`;
const Img = styled.img`
  width: 100%;

  @media (max-width: 560px) {
    width: 100%;
    height: auto;
  }
`;
