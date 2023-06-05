import { footerLinks } from "./FooterData";
import { socialMedia } from "./FooterData";
import logo from "./logo.svg";
import "./footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="sc-footer-container">
        <div className="footer-container-logo">
          <img src={logo} alt="logo" />
          <p className="footer-p">
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        {footerLinks.map((footerlink) => (
          <div className="footer-links" key={footerlink.title}>
            <h4 className="footer-h4">{footerlink.title}</h4>
            <ul className="footer-list">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`footer-list-item  ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="last-div">
        <p className="copyright">
          Copyright Ⓒ 2022 HooBank. All Rights Reserved. <br /> <br /> Author : Mariam Gogaladze
        </p>
        <div className="socials-div">
          {socialMedia.map((social, index) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`social-image ${
                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
              onClick={() => window.open(social.link)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Footer;
