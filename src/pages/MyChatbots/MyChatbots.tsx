import React, { FC } from 'react';

import organizeBlocks from 'assets/images/organize-blocks.png';
import organizeList from 'assets/images/organize-list.png';
import star from 'assets/images/star.png';
import favorite from 'assets/images/favorite.png';

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
    <div className={styles.favorites}>
      <h3 className={styles.title}>Favorites</h3>
      <div className={styles.items}>
        <div className={styles.item}>
          <button className={styles.star}>
            <img src={star} alt="" />
          </button>
          <div className={styles.image} />
          <p className={styles.name}>Bot name</p>
          <p className={styles.template}>Builder</p>
        </div>
      </div>
    </div>
    <div className={styles.items}>
        <div className={styles.item}>
          <button className={styles.star}>
            <img src={favorite} alt="" />
          </button>
          <div className={styles.image} />
          <p className={styles.name}>Bot name</p>
          <p className={styles.template}>Builder</p>
        </div>
      </div>
  </section>
);

export default MyChatbots;
