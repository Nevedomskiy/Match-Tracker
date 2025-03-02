import { FC } from 'react';
import styles from './match.module.css';
import { MatchStatus, TMatch } from '@utils-types';

export const Match: FC<{ match: TMatch }> = ({ match }) => (
  <li className={styles.match}>
    <div className={styles.match__name}> {match.awayTeam.name}</div>
    <div className={styles.match__info}>
      <p className={styles.match__score}>
        {match.awayScore}:{match.homeScore}
      </p>
      <div
        className={`${styles.match__status} ${
          match.status === MatchStatus.Scheduled
            ? styles.match__status_scheduled
            : match.status === MatchStatus.Ongoing
              ? styles.match__status_ongoing
              : match.status === MatchStatus.Finished
                ? styles.match__status_finished
                : ''
        }`}
      >
        {match.status}
      </div>
    </div>
    <div className={styles.match__name}>{match.homeTeam.name}</div>
  </li>
);
