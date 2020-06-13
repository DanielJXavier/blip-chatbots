import React, { FC, useState, useContext } from 'react';

import { MyChatbotsContext } from 'contexts/myChatbots';

import { MyChatbotType, MyChatbotsType } from 'data/myChatbots.types';
import { OrderType, ShowModeType } from './MyChatbots.types';

import add from 'assets/images/add.png';

import Menu from './components/Menu';
import Item from './components/Item';

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
              <Item key={i} image={image} name={name} template={template} created={created} isFavorite={true} isList={showMode === 'list'} handleFavoriteClick={() => handleRemoveFavorite(shortName)} />
            ))}
          </div>
          {visibleChatbots.length > 0 && <hr className={styles.separator} />}
        </div>
      }
      {visibleChatbots.length > 0 &&
        <div className={`${styles.items} ${styles[showMode]}`}>
          {visibleChatbots.sort(sortByKey).map(({ shortName, image, name, template, created }, i) => (
            <Item key={i} image={image} name={name} template={template} created={created} isFavorite={false} isList={showMode === 'list'} handleFavoriteClick={() => handleAddFavorite(shortName)} />
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
