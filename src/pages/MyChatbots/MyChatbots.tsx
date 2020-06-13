import React, { FC, useState, useContext } from 'react';

import { MyChatbotsContext } from 'contexts/myChatbots';

import React, { FC } from 'react';

import organizeBlocks from 'assets/images/organize-blocks.png';
import organizeList from 'assets/images/organize-list.png';
import star from 'assets/images/star.png';
import favorite from 'assets/images/favorite.png';

import styles from './MyChatbots.module.scss';

const MyChatbots: FC = () => {
  const myChatbots = useContext(MyChatbotsContext);

const MyChatbots: FC = () => (
  <section className={styles.myChatbots}>
    <div className={styles.menu}>
      <h2 className={styles.title}>My chatbots</h2>
      <div className={styles.actions}>
          <div className={styles.search}>
            <input type="text" placeholder="Search" value={search} onChange={({ target: { value }}) => setSearch(value)} />
            {search.length > 0 && <button onClick={() => setSearch('')}>x</button>}
          </div>
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
};

export default MyChatbots;
