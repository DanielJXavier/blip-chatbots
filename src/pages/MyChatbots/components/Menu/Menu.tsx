import React, { FC } from 'react';

import { PropsType } from './Menu.types';

import organizeBlocks from 'assets/images/organize-blocks.png';
import organizeList from 'assets/images/organize-list.png';

import styles from './Menu.module.scss';

const Menu: FC<PropsType> = ({ search, isList, setSearch, setOrderByName, setIsList }) => {
  const className = isList ? `${styles.menu} ${styles.list}` : styles.menu;

  return (
    <div className={className}>
      <h2 className={styles.title}>My chatbots</h2>
      <div className={styles.actions}>
        <div className={styles.search}>
          <input type="text" placeholder="Search" value={search} onChange={({ target: { value }}) => setSearch(value)} />
          {search.length > 0 && <button onClick={() => setSearch('')}>x</button>}
        </div>
        <button className={styles.orderBy} onClick={() => setOrderByName(true)}>Order by name</button>
        <button className={styles.orderBy} onClick={() => setOrderByName(false)}>Order by creation</button>
        <button className={styles.showMode} onClick={() => setIsList(false)}>
          <img src={organizeBlocks} alt="Show cards" />
        </button>
        <button className={styles.showMode} onClick={() => setIsList(true)}>
          <img src={organizeList} alt="Show list" />
        </button>
      </div>
    </div>
  );
};

export default Menu;
