import React from 'react';
import PropTypes from 'prop-types';
import styles from './Css/Header.module.css' // Import your CSS module

const Header = ({ title, buttonText, onButtonClick }) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      {buttonText && (
        <button className={styles.button} onClick={onButtonClick}>
          {buttonText}
        </button>
      )}
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  onButtonClick: PropTypes.func,
};

export default Header;
