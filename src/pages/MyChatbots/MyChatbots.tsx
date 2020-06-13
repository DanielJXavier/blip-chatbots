import React, { FC, useState, useContext } from 'react';

import { MyChatbotsContext } from 'contexts/myChatbots';

import { MyChatbotType, MyChatbotsType } from 'data/myChatbots.types';

import add from 'assets/images/add.png';

import Separator from 'components/Separator';
import Menu from './components/Menu';
import Item from './components/Item';

import styles from './MyChatbots.module.scss';

const MyChatbots: FC = () => {
  const myChatbots = useContext(MyChatbotsContext);
  const [chatbots, setChatbots] = useState<MyChatbotsType>(myChatbots);

  // Favorites
  const [favorites, setFavorites] = useState<MyChatbotsType>([]);
  
  const handleAddFavorite = (shortNameToAdd: string) => {
    setFavorites((current) => [...current, myChatbots.find(({ shortName }) => shortName === shortNameToAdd)!]);
    setChatbots((current) => current.filter(({ shortName }) => shortName !== shortNameToAdd));
  };

  const handleRemoveFavorite = (shortNameToRemove: string) => {
    setChatbots((current) => [...current, favorites.find(({ shortName }) => shortName === shortNameToRemove)!]);
    setFavorites((current) => current.filter(({ shortName }) => shortName !== shortNameToRemove));
  };

  // Search
  const [search, setSearch] = useState<string>('');

  const filterBySearch = ({ name }: MyChatbotType) => {
    const regexp = new RegExp(`.*${search}.*`, 'ig');

    return regexp.test(name);
  };

  const visibleFavorites = favorites.filter(filterBySearch);
  const visibleChatbots = chatbots.filter(filterBySearch);

  // Order by
  const [orderByName, setOrderByName] = useState<boolean>(true);

  const sortByKey = (a: MyChatbotType, b: MyChatbotType) => {
    const sortTarget = orderByName ? 'name' : 'created';

    return (a[sortTarget] > b[sortTarget] && 1) || (a[sortTarget] < b[sortTarget] && -1) || 0;
  };
  
  // Cards / List mode
  const [isList, setIsList] = useState<boolean>(false);

  const classNameFavorites = isList ? `${styles.favorites} ${styles.list}` : styles.favorites;
  const classNameItems = isList ? `${styles.items} ${styles.list}` : styles.items;

  return (
    <section className={styles.myChatbots}>
      <Menu isList={isList} search={search} setSearch={setSearch} setOrderByName={setOrderByName} setIsList={setIsList} />
      {visibleFavorites.length > 0 &&
        <div className={classNameFavorites}>
          <h3 className={styles.title}>Favorites</h3>
          <div className={classNameItems}>
            {visibleFavorites.sort(sortByKey).map(({ shortName, image, name, template, created }, i) => (
              <Item key={i} image={image} name={name} template={template} created={created} isFavorite={true} isList={isList} handleFavoriteClick={() => handleRemoveFavorite(shortName)} />
            ))}
          </div>
          {visibleChatbots.length > 0 && <Separator />}
        </div>
      }
      {visibleChatbots.length > 0 &&
        <div className={classNameItems}>
          {visibleChatbots.sort(sortByKey).map(({ shortName, image, name, template, created }, i) => (
            <Item key={i} image={image} name={name} template={template} created={created} isFavorite={false} isList={isList} handleFavoriteClick={() => handleAddFavorite(shortName)} />
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
