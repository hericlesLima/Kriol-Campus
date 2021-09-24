import React from "react";
import Footer from "../../components/Footer/Footer";
import "./contato.scss";
import contact from "../../assets/img/lottie/contact.json";
import Map from "../../components/Map/Map";
import Lottie from "react-lottie";
import HubspotForm from 'react-hubspot-form'

function Contato() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: contact,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="contact-container">
      <div className="contact-content">

        <div className="contact-box">
          <div className="content-title">
            <h1>Contacte-nos</h1>
          </div>
          <div className="content-image-contact">
            <Lottie options={defaultOptions} />
          </div>
          <div className="map-container">
            <Map />
          </div>


          <div className="hubspot-and-contact">
            <div className="hubspot-content">
              <HubspotForm
                portalId='7761597'
                formId='4fb3c5aa-0969-4e3b-906f-f31ef46f4aec'
                onSubmit={() => console.log('Submit!')}
                onReady={() => console.log('Form ready!')}
                loading={<div>Loading...</div>}
              />
            </div>

            <div className="icons-content">
              <div className="box">
                <div className="icon">
                  <i className="ct-ico fas fa-phone-alt"></i>
                  <p>+238 987 03 50</p>
                </div>
                <div className="icon">
                  <i className="ct-ico fas fa-envelope"></i>
                  <p>info@kmindzdigitalagency.com</p>
                </div>
                <div className="icon">
                  <i className="ct-ico fas fa-map-marker"></i>
                  <p style={{ padding: "7px" }}>Praia - Palmarejo</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="footer-content">
        <Footer />
      </div>
    </div>
  );
}

export default Contato;
