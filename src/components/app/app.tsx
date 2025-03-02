import { getMatchesInfo } from '@sliceMatch';
import { useDispatch } from '@store';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import '../../index.css';
import { AppFooter } from '../app-footer';
import { AppHeader } from '../app-header/app-header';
import { Matches } from '../matches/matches';
import styles from './app.module.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMatchesInfo());
  }, []);

  return (
    <div className={styles.app}>
      <AppHeader />
      <Matches />
      <AppFooter />
    </div>
  );
};

export default App;
