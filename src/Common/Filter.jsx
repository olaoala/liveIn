import React from 'react';
import PropTypes from 'prop-types';
import styles from './Css/Filter.module.css';
import { TbCurrencyNaira } from "react-icons/tb";

const Filter = ({ page }) => {
  const renderContent = () => {
    switch (page) {
      case 'home':
        return (
          <>
            <h2 className={styles.header}>Your appointments</h2>
            <div className={styles.buttons}>
              <button>Checking Out (0)</button>
              <button>Currently Hosting (0)</button>
              <button>Upcoming (0)</button>
              <button>Pending (0)</button>
            </div>
          </>
        );
        case 'tour':
        return (
          <>
            <h2 className={styles.header}>Your Reservation</h2>
            <div className={styles.buttons}>
              <button>Checking Out (0)</button>
              <button>Currently Hosting (0)</button>
              <button>Upcoming (0)</button>
              <button>Pending (0)</button>
            </div>
          </>
        );
      case 'overview':
        return (
          <>
            <h2 className={styles.header}>Your Overview</h2>
            <div className={styles.summarySections}>
              <div className={styles.section} tabIndex="0">
                <p>In Progress</p>
                <div>
                <TbCurrencyNaira /> <span>5.00</span>
                </div>
              </div>
              <div className={styles.section} tabIndex="0">
                <p>Pending</p>
                <div>
                <TbCurrencyNaira /> <span>5.00</span>
                </div>
              </div>
              <div className={styles.section} tabIndex="0">
                <p>Completed</p>
                <div>
                <TbCurrencyNaira /> <span>5.00</span>
                </div>
                              </div>
              <div className={styles.section} tabIndex="0">
                <p>Available</p>
                <div>
                <TbCurrencyNaira /> <span>5.00</span>
                </div>
                {/* <span><TbCurrencyNaira />5</span> */}
              </div>
            </div>
            <hr />
          </>
                
        );
      case 'earnings':
        return (
          <>
            <h2 className={styles.header}>Your Billings and Earnings</h2>
            <div className={styles.dateSelection}>
              <div>
                <div  className={styles.dateRangeContainer}>
                <input type="date" /> -
                <input type="date" />
                </div>
              </div>
             
              <button className={styles.saveButton}>Save</button>
            </div>
          </>
        );
      case 'listings':
        return (
          <>
            <h2 className={styles.header}>Your Listings</h2>
            <div className={styles.buttons}>
              <button>Checking Out</button>
              <button>Currently Hosting</button>
              <button>Upcoming</button>
              <button>Pending</button>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return <div className={styles.filterContainer}>{renderContent()}</div>;
};

Filter.propTypes = {
  page: PropTypes.oneOf(['home', 'overview', 'earnings', 'listings']).isRequired,
};

export default Filter;
