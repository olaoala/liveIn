import React from 'react';
import styles from './Css/Footer.module.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Company Info */}
        <div className={styles.companyInfo}>
          <h2>liveIn</h2>
          <p>
            Empowering you to find and manage properties <br /> effortlessly. Join us to explore a seamless experience <br /> in property management and rentals.
          </p>
        </div>

        <div className={styles.quickLinksContainer}>
        <div className={styles.quickLinks}>
          <h3>Live In</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/about">Live In Agent</a></li>
            <li><a href="/contact">Rent Home</a></li>
            <li><a href="/terms">Find Home</a></li>
          </ul>
        </div>
        <div className={styles.quickLinks}>
          <h3>Socials</h3>
          <ul>
            <li><a href="/about">Instagram</a></li>
            <li><a href="/about">Facebook</a></li>
            <li><a href="/contact">Twitter</a></li>
            <li><a href="/terms">Linkedin</a></li>
          </ul>
        </div>
        <div className={styles.quickLinks}>
          <h3>Locations</h3>
          <ul>
            <li><a href="/about">Lagos</a></li>
            <li><a href="/about">Sabo</a></li>
            <li><a href="/contact">Agege</a></li>
            <li><a href="/terms">Yaba</a></li>
          </ul>
        </div>
        </div>
      </div>
      <h1>LIVE IN</h1>
      {/* <hr /> */}

      {/* Footer Bottom */}
      <div className={styles.footerBottom}>
        <p>&copy; 2024 liveIn.</p>
      </div>
    </footer>
  );
};

export default Footer;
