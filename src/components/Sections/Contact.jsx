import React from "react";
import styled from "styled-components";
// Assets
import ContactImg1 from "../../assets/img/ContactImg1.jpg";
import ContactImg2 from "../../assets/img/ContactImg2.jpg";
import ContactImg3 from "../../assets/img/ContactImg3.jpg";

export default function Contact() {
  return (
    <Wrapper id="contact">
      <div className="lightBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Envoyez moi un message !</h1>
            <p className="font13">
              Pour toutes demandes, n'hésitez pas à m'envoyer votre message.
            </p>
          </HeaderInfo>
          <div className="row" style={{ paddingBottom: "30px" }}>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <Form>
                <label className="font13">Nom</label>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  className="font20 extraBold"
                />
                <label className="font13">Prénom</label>
                <input
                  type="text"
                  id="lname"
                  name="lname"
                  className="font20 extraBold"
                />
                <label className="font13">Email:</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="font20 extraBold"
                />
                <label className="font13">Téléphone:</label>
                <input
                  type="tel"
                  id="tel"
                  name="tel"
                  className="font20 extraBold"
                />
                <label className="font13">Objet:</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="font20 extraBold"
                />
                <textarea
                  rows="4"
                  cols="50"
                  type="text"
                  id="message"
                  name="message"
                  className="font20 extraBold"
                />
              </Form>
              <SumbitWrapper className="flex">
                <ButtonInput
                  type="submit"
                  value="Envoyer"
                  className="pointer animate radius8"
                  style={{ maxWidth: "220px" }}
                />
              </SumbitWrapper>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 flex">
              <div
                style={{ width: "50%" }}
                className="flexNullCenter flexColumn"
              >
                <ContactImgBox>
                  <img
                    src={ContactImg1}
                    alt="office"
                    className="radius6 contact_img"
                  />
                </ContactImgBox>
                <ContactImgBox>
                  <img src={ContactImg2} alt="office" className="radius6 contact_img" />
                </ContactImgBox>
              </div>
              <div style={{ width: "50%" }}>
                <div style={{ marginTop: "100px" }}>
                  <img src={ContactImg3} alt="office" className="radius6 contact_img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Form = styled.form`
  padding: 70px 0 30px 0;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 30px;
    color: rgb(120, 70, 85)
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;
const ButtonInput = styled.input`
  border: 1px solid rgba(235,215,215,255);
  background-color: rgba(235,215,215,255);
  width: 100%;
  padding: 15px;
  outline: none;
  color: rgb(120, 70, 85);
  :hover {
    background-color: rgba(120, 70, 85, 0.788);
    border: 1px solid rgba(120, 70, 85, 0.788);
    color: #fff;
  }
  @media (max-width: 991px) {
    margin: 0 auto;
  }
`;
const ContactImgBox = styled.div`
  max-width: 180px;
  align-self: flex-end;
  margin: 10px 30px 10px 0;
`;
const SumbitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;
