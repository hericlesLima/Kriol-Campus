import React from "react";

import "./subscription-payment.scss";
import Button from "../Button/button";

import Image from "../../resources/Astronauta-2.png";

function SubscriptionPayment() {
  return (
    <div className="subscription">
      <div className="title">
        <h1>Método de pagamento</h1>
      </div>
      <div className="content">
        <form>
          <div className="payment">
            <input type="text" placeholder="Número do cartão" />
            <br />
          </div>
          <div className="payment-details">
            <input
              className="expiration-date"
              type="text"
              placeholder="Data de expiração"
            />
            <br />
            <input className="cvv" type="text" placeholder="CVV" />
            <br />
          </div>
        </form>
        <div className="image">
          <img src={Image} />
        </div>
      </div>
      <div className="button">
        <Button title="Efectuar pagamento" icon="far fa-share-square"></Button>
      </div>
    </div>
  );
}

export default SubscriptionPayment;
