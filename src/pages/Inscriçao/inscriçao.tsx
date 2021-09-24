import Footer from "../../components/Footer/Footer";
import Subscription from "../../components/Subscription/subcription";
import "./inscriçao.scss";

function Inscriçao() {
  return (
    <div className="subscription-page">
      <div className="subscription-form">
        <Subscription />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Inscriçao;
