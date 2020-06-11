import React, { FC } from 'react';

import logo from 'assets/images/logo.png';

import styles from './Header.module.scss';

const Header: FC = () => (
  <header className={styles.header}>
    <img src={logo} alt="BLiP" />
  </header>
);

export default Header;
