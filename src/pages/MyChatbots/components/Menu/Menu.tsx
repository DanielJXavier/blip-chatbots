import React, { FC } from 'react';

import { PropsType } from './Menu.types';

import organizeBlocks from 'assets/images/organize-blocks.png';
import organizeList from 'assets/images/organize-list.png';

import styles from './Menu.module.scss';

const Menu: FC<PropsType> = ({ showMode, search, setSearch, setOrder, setShowMode }) => (
  <div className={`${styles.menu} ${styles[showMode]}`}>
    <h2 className={styles.title}>My chatbots</h2>
    <div className={styles.actions}>
      <div className={styles.search}>
        <input type="text" placeholder="Search" value={search} onChange={({ target: { value }}) => setSearch(value)} />
        {search.length > 0 && <button onClick={() => setSearch('')}>x</button>}
      </div>
      <button className={styles.orderBy} onClick={() => setOrder('name')}>Order by name</button>
      <button className={styles.orderBy} onClick={() => setOrder('created')}>Order by creation</button>
      <button className={styles.showMode} onClick={() => setShowMode('cards')}>
        <img src={organizeBlocks} alt="Show cards" />
      </button>
      <button className={styles.showMode} onClick={() => setShowMode('list')}>
        <img src={organizeList} alt="Show list" />
      </button>
    </div>
  </div>
);

export default Menu;
