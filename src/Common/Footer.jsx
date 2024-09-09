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
            Empowering you to find and manage properties effortlessly. Join us to explore a seamless experience in property management and rentals.
          </p>
        </div>

        {/* Quick Links */}
        <div className={styles.quickLinks}>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/how-it-works">How It Works</a></li>
            <li><a href="/browse-homes">Browse Homes</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className={styles.contactInfo}>
          <h3>Contact Us</h3>
          <p><strong>Email:</strong> support@livein.com</p>
          <p><strong>Phone:</strong> +1 (123) 456-7890</p>
          <p><strong>Address:</strong> 123 LiveIn St, Suite 100, Property City, PC 12345</p>
          <div className={styles.socialIcons}>
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
          </div>
        </div>

  
      </div>

      {/* Footer Bottom */}
      <div className={styles.footerBottom}>
        <p>&copy; 2024 liveIn. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
