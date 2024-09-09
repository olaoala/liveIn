import React from 'react';
import styles from './Css/DataArea.module.css';

const DataArea = ({ page, filter }) => {
  const renderData = () => {
    switch (page) {
      case 'home':
        switch (filter) {
          case 'checkingOut':
            return <p>Showing data for reservations that are checking out.</p>;
          case 'currentlyHosting':
            return <p>Showing data for currently hosting reservations.</p>;
          case 'upcoming':
            return <p>Showing data for upcoming reservations.</p>;
          case 'pending':
            return <p>Showing data for pending reservations.</p>;
          default:
            return <p>Select a filter to view data.</p>;
        }

      case 'overview':
        switch (filter) {
          case 'inProgress':
            return <p>Showing data for in-progress tasks.</p>;
          case 'pending':
            return <p>Showing data for pending tasks.</p>;
          case 'completed':
            return <p>Showing data for completed tasks.</p>;
          default:
            return <p>Select a filter to view data.</p>;
        }

      case 'earnings':
        return (
          <div className={styles.billingContainer}>
            <ul className={styles.clientList}>
              <li>Wuraola</li>
              <li>Apata</li>
              <li>Ariyo</li>
            </ul>
            <div className={styles.billingdataArea}>
              <p>Showing earnings data from {filter.dateFrom} to {filter.dateTo}.</p>
            </div>
          </div>
        );

      case 'listings':
        switch (filter) {
          case 'checkingOut':
            return <p>Showing data for listings that are checking out.</p>;
          case 'currentlyHosting':
            return <p>Showing data for currently hosting listings.</p>;
          case 'upcoming':
            return <p>Showing data for upcoming listings.</p>;
          case 'pending':
            return <p>Showing data for pending listings.</p>;
          default:
            return <p>Select a filter to view data.</p>;
        }

      default:
        return <p>No data available for this page.</p>;
    }
  };

  return (
    <div className={page !== 'earnings' ? styles.dataArea : ''}>
      {renderData()}
    </div>
  );
};

export default DataArea;
