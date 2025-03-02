import { FC, useEffect, useState } from 'react';
import { useSelector, useDispatch } from '@store';
import refresh from '../../assets/images/Refresh.svg';
import styles from './matches.module.css';
import {
  selectError,
  selectIsLoading,
  getMatchesInfo,
  selectMatches
} from '@sliceMatch';
import { Match } from '../match/match';

export const Matches: FC = () => {
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const matches = useSelector(selectMatches);
  // console.log(matches);
  return (
    <div className={styles.matches}>
      {isLoading || error ? (
        <img
          className={styles.matches__loading}
          src={refresh}
          alt='иконка обновления'
        />
      ) : (
        <ul className={styles.matches__list}>
          {matches.length > 0 ? (
            matches.map((match) => <Match match={match} key={match.title} />)
          ) : (
            <li>Нет доступных матчей</li> // Сообщение об отсутствии матчей
          )}
        </ul>
      )}
    </div>
  );
};
