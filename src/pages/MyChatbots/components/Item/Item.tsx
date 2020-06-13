import React, { FC } from 'react';

import { Link } from 'react-router-dom';

import { PropsType } from './Item.types';

import star from 'assets/images/star.png';
import favorite from 'assets/images/favorite.png';

import styles from './Item.module.scss';

const MyChatbots: FC<PropsType> = ({ shortName, image, name, template, created, isFavorite, isList, handleFavoriteClick }) => {
  const className = isList ? `${styles.item} ${styles.list}` : styles.item;

  const favoriteSrc = isFavorite ? star : favorite;
  const favoriteAlt = isFavorite ? 'Remove from favorites' : 'Add to favorites';

  const info = isList ? `Created at ${created.replace(/^([0-9]{4})-([0-9]{2})-([0-9]{2}).*$/, '$3/$2/$1')}` : template;

  return (
    <div className={className}>
      <button className={styles.star} onClick={handleFavoriteClick}>
        <img src={favoriteSrc} alt={favoriteAlt} />
      </button>
      <Link className={styles.link} to={`/my-chatbots/${shortName}`}>
        <img className={styles.image} src={image} alt={name} />
        <p className={styles.name}>{name}</p>
        <p className={styles.info}>{info}</p>
      </Link>
    </div>
  );
};

export default MyChatbots;
