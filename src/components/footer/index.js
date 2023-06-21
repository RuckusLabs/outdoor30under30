import RuckusLogo from "../../assets/ruckus-logo.svg";

import style from "./index.css";

const Footer = () => {
  return (
    <footer class={style.footer}>
      <p>© 2016–{new Date().getFullYear()} Outdoor 30 Under 30. All rights reserved. {/*Built by <a href="https://ruckuslabs.co"><img src={RuckusLogo} alt="Ruckus Labs" /></a> */}</p>
    </footer>
  )
}

export default Footer;