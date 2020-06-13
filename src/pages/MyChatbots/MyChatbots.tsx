import React, { FC, useState, useContext } from 'react';

import { MyChatbotsContext } from 'contexts/myChatbots';

import { MyChatbotType, MyChatbotsType } from 'data/myChatbots';

import organizeBlocks from 'assets/images/organize-blocks.png';
import organizeList from 'assets/images/organize-list.png';
import star from 'assets/images/star.png';
import favorite from 'assets/images/favorite.png';

import styles from './MyChatbots.module.scss';

const MyChatbots: FC = () => {
  const myChatbots = useContext(MyChatbotsContext);

  const [favorites, setFavorites] = useState<MyChatbotsType>([]);
  const [chatbots, setChatbots] = useState<MyChatbotsType>(myChatbots);

  const [search, setSearch] = useState('');
  const [order, setOrder] = useState('');

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
      <div className={styles.menu}>
        <h2 className={styles.title}>My chatbots</h2>
        <div className={styles.actions}>
          <div className={styles.search}>
            <input type="text" placeholder="Search" value={search} onChange={({ target: { value }}) => setSearch(value)} />
            {search.length > 0 && <button onClick={() => setSearch('')}>x</button>}
          </div>
          <button className={styles.orderBy} onClick={() => setOrder('name')}>Order by name</button>
          <button className={styles.orderBy} onClick={() => setOrder('created')}>Order by creation</button>
          <button className={styles.showMode}>
            <img src={organizeBlocks} alt="Show blocks" />
          </button>
          <button className={styles.showMode}>
            <img src={organizeList} alt="Show list" />
          </button>
        </div>
      </div>
      {visibleFavorites.length > 0 &&
        <div className={styles.favorites}>
          <h3 className={styles.title}>Favorites</h3>
          <div className={styles.items}>
            {visibleFavorites.sort(sortByKey).map(({ shortName, image, name, template }, i) => (
              <div key={i} className={styles.item}>
                <button className={styles.star} onClick={() => handleRemoveFavorite(shortName)}>
                  <img src={star} alt="Remove from favorites" />
                </button>
                <img className={styles.image} src={image} alt={name} />
                <p className={styles.name}>{name}</p>
                <p className={styles.template}>{template}</p>
              </div>
            ))}
          </div>
          {visibleChatbots.length > 0 && <hr className={styles.separator} />}
        </div>
      }
      {visibleChatbots.length > 0 &&
        <div className={styles.items}>
          {visibleChatbots.sort(sortByKey).map(({ shortName, image, name, template }, i) => (
            <div key={i} className={styles.item}>
              <button className={styles.star} onClick={() => handleAddFavorite(shortName)}>
                <img src={favorite} alt="Add to favorites" />
              </button>
              <img className={styles.image} src={image} alt={name} />
              <p className={styles.name}>{name}</p>
              <p className={styles.template}>{template}</p>
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
    </section>
  );
};

export default MyChatbots;
