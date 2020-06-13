import React, { FC, useContext } from 'react';

import { useParams } from 'react-router-dom';

import { MyChatbotsContext } from 'contexts/myChatbots';

import formatDateString from 'utils/formatDateString';

import blip from 'assets/images/blip.png';

import Separator from 'components/Separator';

import styles from './ChatbotDetails.module.scss';

const ChatbotDetails: FC = () => {
  const myChatbots = useContext(MyChatbotsContext);

  const { shortName: shortNameParam } = useParams();

  const { name, shortName, created } = myChatbots.find(({ shortName }) => shortName === shortNameParam)!;

  return (
    <section className={styles.chatbotDetails}>
      <div className={styles.chatbotData}>
        <div className={styles.image}>
          <img src={blip} alt={name} />
        </div>
        <div className={styles.nameId}>
          <h2>Botname</h2>
          <p>Id: {shortName}</p>
        </div>
        <div className={styles.created}>
          <p>Created at {formatDateString(created)}</p>
        </div>
        <Separator />
      </div>
    </section>
  );
};

export default ChatbotDetails;
