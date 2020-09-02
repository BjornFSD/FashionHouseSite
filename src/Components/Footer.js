import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_line"></div>
      <div className="footer_box">
        <div className="footer_box-kontakt">
          <h2>Kontakt</h2>
          <div className="underline"></div>
          <span>Tel: 111 222 333</span>
          <br />
          <span>fashionhouse@xyz.com</span>
        </div>
        <div className="footer_box-newsletter">
          <h2>Newsletter</h2>
          <div className="underline"></div>
          <span>
            Dołącz do Fashion House Club i otrzymaj rabat na pierwsze zakupy aż
            do 50%
          </span>
          <form className="footer_box-newsletter--form">
            <input
              type="text"
              className="footer_box-newsletter--form-email"
              placeholder="Podaj adres e-mail"
            ></input>
            <button className="footer_box-newsletter--form-btn">
              SUBSKRYBUJ!
            </button>
          </form>
        </div>
      </div>
      <div className="footer_line"></div>
      <p className="footer_cr">
        © 2020 Design {`&`} Developed by Michał Dulko . All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
