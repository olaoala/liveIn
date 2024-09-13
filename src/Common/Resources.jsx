import React from 'react';
import PropTypes from 'prop-types';
import styles from './Css/Resources.module.css';
import { TbCurrencyNaira } from "react-icons/tb";
import { FaPhoneAlt } from "react-icons/fa";

const Resources = ({ page }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Resources & Support</h2>
      <h6 className={styles.subtittle}>Get the best resources and help you want.</h6>
      <div className={styles.helpContainer}>
        <div className={styles.buttons}>
          <FaPhoneAlt className={styles.icon} />
          <div>
            <h5>Help Center</h5>
            <p>Access FAQs, guides, and tutorials on using the platform.</p>
          </div>
        </div>
        <div className={styles.buttons}>
          <TbCurrencyNaira className={styles.icon} />
          <div>
            <h5>Contact support</h5>
            <p>Direct line to customer support for any issues or questions.</p>
          </div>
        </div>
        <div className={styles.buttons}>
          <FaPhoneAlt className={styles.icon} />
          <div>
            <h5>Community forum</h5>
            <p>Engage with other agents, share tips, and discuss industry trends.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
