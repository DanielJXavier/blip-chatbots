import React, { FC, useContext } from 'react';

import { useParams } from 'react-router-dom';

import { MyChatbotsContext } from 'contexts/myChatbots';

import formatDateString from 'utils/formatDateString';
import formatNumber from 'utils/formatNumber';
import getCountryAndLanguage from 'utils/getCountryAndLanguage';

import blip from 'assets/images/blip.png';
import user from 'assets/images/user.png';
import union from 'assets/images/union.png';
import sent from 'assets/images/sent.png';
import plano from 'assets/images/plano.png';

import Separator from 'components/Separator';

import styles from './ChatbotDetails.module.scss';

const ChatbotDetails: FC = () => {
  const myChatbots = useContext(MyChatbotsContext);

  const { shortName: shortNameParam } = useParams();

  const { name, shortName, created, culture, analytics } = myChatbots.find(({ shortName }) => shortName === shortNameParam)!;

  return (
    <section className={styles.chatbotDetails}>
      <div className={styles.header}>
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
      <div className={styles.content}>
        <div className={styles.chatbotData}>
          <div className={styles.locale}>
            <div className={styles.field}>
              <p className={styles.label}>Region and idiom</p>
              <p className={styles.value}>{getCountryAndLanguage(culture)}</p>
            </div>
            <div className={styles.field}>
              <p className={styles.label}>Timezone</p>
              {/* Os dados de timezone ficaram "mockados" porque não há informações suficientes para gerá-los no JSON fornecido */}
              <p className={styles.value}>(UTC - 03:00) Brasília</p>
            </div>
          </div>
          <div className={styles.users}>
            <div className={styles.image}>
              <img src={user} alt="User" />
            </div>
            <div className={styles.text}>
              <p className={styles.value}>{formatNumber(culture, analytics.user.actived)}</p>
              <p className={styles.description}>Active users</p>
            </div>
          </div>
          <div className={styles.receivedMessages}>
            <div className={styles.image}>
              <img src={union} alt="Received" />
            </div>
            <div className={styles.text}>
              <p className={styles.value}>{formatNumber(culture, analytics.message.received)}</p>
              <p className={styles.description}>Received messages</p>
            </div>
          </div>
          <div className={styles.sentMessages}>
            <div className={styles.image}>
              <img src={sent} alt="Sent" />
            </div>
            <div className={styles.text}>
              <p className={styles.value}>{formatNumber(culture, analytics.message.sent)}</p>
              <p className={styles.description}>Sent messages</p>
            </div>
          </div>
        </div>
        <div className={styles.accountData}>
          <img className={styles.image} src={plano} alt="Status account" />
          <p className={styles.label}>Status account</p>
          <p className={styles.value}>Free</p>
          <button className={styles.button} disabled={true}>Update account</button>
        </div>
      </div>
    </section>
  );
};

export default ChatbotDetails;
