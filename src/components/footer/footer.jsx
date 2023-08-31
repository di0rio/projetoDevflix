// Para utilizar o componente crie o import na página que deseja e
// coloque o nome da pessoa entre <Footer>Nome</Footer>
// passe a informação dentro da tag Footer - LINK
// <Footer link={}>d0rio</Footer>

import "./footer.module.css";
import SocialLinks from "../socialLinks/socialLinks";
import "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js";

const Footer = ({ children, link }) => {
  return (
    <footer>
      <p> {""}{" "}
        <a href={link} target="_blank">
          {children}
        </a>
      </p>
      <SocialLinks icon={"logo-twitter"} href={"#"} />
      <SocialLinks icon={"logo-instagram"} href={"#"} />
      <SocialLinks icon={"logo-facebook"} href={"#"} />
    </footer>
  );
};

export default Footer;
