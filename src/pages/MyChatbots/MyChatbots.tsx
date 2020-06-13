import React, { FC, useState, useContext } from 'react';

import { MyChatbotsContext } from 'contexts/myChatbots';

import { MyChatbotType, MyChatbotsType } from 'data/myChatbots.types';
import { OrderType, ShowModeType } from './MyChatbots.types';

import star from 'assets/images/star.png';
import favorite from 'assets/images/favorite.png';
import add from 'assets/images/add.png';

import Menu from './components/Menu';

import styles from './MyChatbots.module.scss';

const MyChatbots: FC = () => {
  const myChatbots = useContext(MyChatbotsContext);

  const [favorites, setFavorites] = useState<MyChatbotsType>([]);
  const [chatbots, setChatbots] = useState<MyChatbotsType>(myChatbots);

  const [search, setSearch] = useState<string>('');
  const [order, setOrder] = useState<OrderType>('name');

  const [showMode, setShowMode] = useState<ShowModeType>('cards');

  const handleAddFavorite = (shortNameToAdd: string) => {
    setFavorites((current) => [...current, myChatbots.find(({ shortName }) => shortName === shortNameToAdd)!]);
    setChatbots((current) => current.filter(({ shortName }) => shortName !== shortNameToAdd));
  };

  const handleRemoveFavorite = (shortNameToRemove: string) => {
    setChatbots((current) => [...current, favorites.find(({ shortName }) => shortName === shortNameToRemove)!]);
    setFavorites((current) => current.filter(({ shortName }) => shortName !== shortNameToRemove));
  };

  const sortByKey = (a: any, b: any) => (a[order] > b[order] && 1) || (a[order] < b[order] && -1) || 0;

  const filterBySearch = ({ name }: MyChatbotType) => {
    const regexp = new RegExp(`.*${search}.*`, 'ig');

    return regexp.test(name);
  };

  const visibleFavorites = favorites.filter(filterBySearch);
  const visibleChatbots = chatbots.filter(filterBySearch);

  return (
    <section className={styles.myChatbots}>
      <Menu showMode={showMode} search={search} setSearch={setSearch} setOrder={setOrder} setShowMode={setShowMode} />
      {visibleFavorites.length > 0 &&
        <div className={`${styles.favorites} ${styles[showMode]}`}>
          <h3 className={styles.title}>Favorites</h3>
          <div className={`${styles.items} ${styles[showMode]}`}>
            {visibleFavorites.sort(sortByKey).map(({ shortName, image, name, template, created }, i) => (
              <div key={i} className={styles.item}>
                <button className={styles.star} onClick={() => handleRemoveFavorite(shortName)}>
                  <img src={star} alt="Remove from favorites" />
                </button>
                <img className={styles.image} src={image} alt={name} />
                <p className={styles.name}>{name}</p>
                <p className={styles.info}>{showMode === 'cards' ? template : `Created at ${created.replace(/^([0-9]{4})-([0-9]{2})-([0-9]{2}).*$/, '$3/$2/$1')}`}</p>
              </div>
            ))}
          </div>
          {visibleChatbots.length > 0 && <hr className={styles.separator} />}
        </div>
      }
      {visibleChatbots.length > 0 &&
        <div className={`${styles.items} ${styles[showMode]}`}>
          {visibleChatbots.sort(sortByKey).map(({ shortName, image, name, template, created }, i) => (
            <div key={i} className={styles.item}>
              <button className={styles.star} onClick={() => handleAddFavorite(shortName)}>
                <img src={favorite} alt="Add to favorites" />
              </button>
              <img className={styles.image} src={image} alt={name} />
              <p className={styles.name}>{name}</p>
              <p className={styles.info}>{showMode === 'cards' ? template : `Created at ${created.replace(/^([0-9]{4})-([0-9]{2})-([0-9]{2}).*$/, '$3/$2/$1')}`}</p>
            </div>
          ))}
        </div>
      }
      {!visibleFavorites.length && !visibleChatbots.length &&
        <div className={styles.noContent}>
          <p>Sorry! We can&apos;t find chatbots by the &quot;{search}&quot; search</p>
          <button onClick={() => setSearch('')}>Clean search</button>
        </div>
      }
      <button className={styles.add} disabled={true}>
        <img src={add} alt="Add" />
      </button>
    </section>
  );
};

export default MyChatbots;
