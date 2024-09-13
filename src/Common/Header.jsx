import React from 'react';
import PropTypes from 'prop-types';
import styles from './Css/Header.module.css' // Import your CSS module

const Header = ({ title, buttons, subtittle }) => {
  return (
    <header className={styles.header}>
      <div>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.subtittle}>{subtittle}</p>
      </div>
      <div className={styles.buttonsContainer}>
        {buttons &&
          buttons.map((button, index) => (
            <button
              key={index}
              className={styles.button}
              onClick={button.onClick}
            >
              {button.text}
            </button>
          ))}
      </div>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
    })
  ).isRequired,
};

export default Header;
