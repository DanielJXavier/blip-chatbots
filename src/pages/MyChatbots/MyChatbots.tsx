import React, { FC } from 'react';

import organizeBlocks from 'assets/images/organize-blocks.png';
import organizeList from 'assets/images/organize-list.png';
import styles from './MyChatbots.module.scss';

const MyChatbots: FC = () => (
  <section className={styles.myChatbots}>
    <div className={styles.menu}>
      <h2 className={styles.title}>My chatbots</h2>
      <div className={styles.actions}>
        <input className={styles.search} type="text" placeholder="Search" />
        <button className={styles.orderBy}>Order by name</button>
        <button className={styles.orderBy}>Order by creation</button>
        <button className={styles.showMode}>
          <img src={organizeBlocks} alt="Show blocks" />
        </button>
        <button className={styles.showMode}>
          <img src={organizeList} alt="Show list" />
        </button>
      </div>
    </div>
  </section>
);

export default MyChatbots;
