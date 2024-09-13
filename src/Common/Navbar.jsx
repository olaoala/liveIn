import React, { useState } from 'react';
import styles from './Css/Navbar.module.css'; // Corrected the import name
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosNotificationsOutline } from "react-icons/io";
import { Link } from 'react-router-dom';

// Navbar Component
const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState('');

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? '' : dropdown);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navLinks}>
        <div className={styles.logo}>
          <p>liveIn</p>
        </div>
        <div className={styles.midLinks}>
          <p>How liveIn Works</p>
          <p>Browse Homes</p>
        </div>
        <div className={styles.rightLinks}>
          <Link to='/login'>
            <p>Sign in</p>
          </Link>
          <div className={styles.dropdown}>
            <div onClick={() => toggleDropdown('profile')} className={styles.profile}>
              {/* Uncomment this block to enable the dropdown */}
              {activeDropdown === 'profile' && (
                <div className={styles.profileDropdownContent}>
                  <p>Log In</p>
                  <p>Sign Up</p>
                </div>
              )}
              <RxHamburgerMenu className={styles.profileItems} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

// DashNav Component
const DashNav = () => {
  const [activeDropdown, setActiveDropdown] = useState('');

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? '' : dropdown);
  };

  return (
    <div className={styles.DashNav}>
      <nav className={styles.navbar}>
        <div className={styles.navLinks}>
          <div className={styles.logo}>
          <Link to='/dashboard'>
          <p>liveIn</p>
          </Link>
          </div>
          <div className={styles.midLinks}>
            <Link to='/dashboard'>
              <p>Overview</p>
            </Link>
            <Link to='/billings'>
              <p>Billings and Earnings</p>
            </Link>
            <Link to='/Tour'>
              <p>Tours Management</p>
            </Link>
            <Link to='/listings'>
              <p>Listings</p>
            </Link>

          </div>
          <div className={styles.rightLinks}>
            <span className={styles.notif}><IoIosNotificationsOutline/></span>
            <div className={styles.dropdown}>
              <div onClick={() => toggleDropdown('profile')} className={styles.profile}>
                {activeDropdown === 'profile' && (
                  <div className={styles.profileDropdownContent}>
                    <p>Log In</p>
                    <p>Sign Up</p>
                  </div>
                )}
                <span className={styles.profileTag}>W</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>

  );
};

export default Navbar;
export { DashNav };
