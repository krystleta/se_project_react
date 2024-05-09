import React, { useState } from 'react';
import "./Footer.css";
import { footer } from "../../utils/constants";

function Footer() {
  const year = new Date().getFullYear();
    return (
      <footer className="footer">
        <p className="footer__content">
          Developed by: {footer.developer}
        </p>
        <p className="footer__copyright">
          {year}
        </p>
      </footer>
    );
}

export default Footer