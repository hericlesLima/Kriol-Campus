import React from "react";
import "./footer.scss";

function Footer() {
  return (
    <footer>
      <div className="box-ico">
        <a href="https://www.instagram.com/kmindzdigital/">
          <i className="ft-ico fab fa-instagram"></i>
        </a>
        <a href="https://www.facebook.com/kmindzdigital">
          <i className="ft-ico fab fa-facebook-f"></i>
        </a>
        <a href="https://www.linkedin.com/company/kmindz-digital-agency/">
          <i className="ft-ico fab fa-linkedin-in"></i>
        </a>
      </div>
      <p className="footer-text">Copyright &copy; 2021 | Powered by Kmindz</p>
    </footer>
  );
}
export default Footer;
