import "./Footer.css";
import { footer } from "../../utils/constants";

function Footer() {
    return (
      <div className="footer">
        <p className="footer__content">
          Developed by: {footer.developer}
        </p>
        <p className="footer__copyright">
          {footer.year}
        </p>
      </div>
    );
}

export default Footer