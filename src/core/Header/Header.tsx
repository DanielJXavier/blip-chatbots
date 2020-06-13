import React, { FC } from 'react';

import { Link } from 'react-router-dom';

import logo from 'assets/images/logo.png';

import styles from './Header.module.scss';

const Header: FC = () => (
  <header className={styles.header}>
    <Link to="/my-chatbots">
      <img src={logo} alt="BLiP" />
    </Link>
  </header>
);

export default Header;
