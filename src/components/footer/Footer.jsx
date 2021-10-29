import React from 'react';
import classes from "./Footer.module.css";
import footerLogo from "./footer-logo.svg";
import developLogo from "./develop-logo.png";

const Footer = () =>  {
  return (
    <div className={classes.footer}>
      <div className={classes.header}>
        <p className={classes.description}>Национальный оператор почтовой связи Республики Беларусь </p>
        <a className={classes.footerLogo} href="/"><img src={footerLogo} alt="" /></a>
        <p className={classes.description}>Покупайте белорусские товары на shop.belpost.by</p>
      </div>
      <div className={classes.develop}>
        <p>Разработано компанией</p>
        <a href="/" className={classes.developLogo}><img src={developLogo} alt="" /></a>
        <a href="/">High-tech.by</a>
      </div>
    </div>
  );
}

export default Footer;