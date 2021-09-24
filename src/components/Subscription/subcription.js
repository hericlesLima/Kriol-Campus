import "./subscription.scss";

import EventbriteButton from "react-eventbrite-popup-checkout";

function Subscription() {
  return (
    <div className="subscription">
      <div className="title">
        <h1>Inscrição</h1>
      </div>

      <div className="eventbrite">
        <EventbriteButton className="eventbrite-button" ebEventId="161667605159">
           Faça sua inscrição aqui <i class="fas fa-sign-in-alt"></i>
        </EventbriteButton>
      </div>
    </div>
  );
}

export default Subscription;
