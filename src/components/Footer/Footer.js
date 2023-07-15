import "./footer.scss";
import logo from "../../assets/logo_kasa_white.svg";

const Footer = () => {
  return (
    <footer>
      <img src={logo} alt="logo kasa" height="30" width="auto" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
