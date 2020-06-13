import React, { FC, Dispatch as DispatchType, SetStateAction as SetStateActionType } from 'react';

import { OrderType, ShowModeType } from 'pages/MyChatbots/MyChatbots.types';

import organizeBlocks from 'assets/images/organize-blocks.png';
import organizeList from 'assets/images/organize-list.png';

import styles from './Menu.module.scss';

type Props = {
  showMode: ShowModeType;
  search: string;
  setSearch: DispatchType<SetStateActionType<string>>;
  setOrder: DispatchType<SetStateActionType<OrderType>>;
  setShowMode: DispatchType<SetStateActionType<ShowModeType>>;
}

const Menu: FC<Props> = ({ showMode, search, setSearch, setOrder, setShowMode }) => (
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
