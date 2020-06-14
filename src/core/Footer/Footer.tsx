import React, { FC } from 'react';

import Separator from 'components/Separator';

import styles from './Footer.module.scss';

const Footer: FC = () => (
  <footer className={styles.footer}>
    <Separator />
    <p className={styles.text}>&copy; 2020, BLiP | All rights reserved</p>
  </footer>
);

export default Footer;
