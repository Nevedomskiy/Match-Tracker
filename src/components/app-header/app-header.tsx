import { FC, useEffect, useState } from 'react';
import { useSelector, useDispatch } from '@store';
import logo from '../../assets/images/Match Tracker.svg';
import err from '../../assets/images/err-icon.svg';
import refresh from '../../assets/images/Refresh.svg';
import styles from './app-header.module.css';
import {
  selectError,
  selectIsLoading,
  getMatchesInfo,
  selectMatches
} from '@sliceMatch';

export const AppHeader: FC = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setIsAnimating(true); // Запуск анимации при начале загрузки
    }
  }, [isLoading]);

  // Завершение анимации через 2 секунды после её начала
  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false); // Остановка анимации через 2 секунды
      }, 1000);

      return () => clearTimeout(timer); // Очистка таймера при размонтировании
    }
  }, [isAnimating]);

  const handleUpdate = () => {
    dispatch(getMatchesInfo());
  };

  return (
    <div className={styles.header}>
      <div className={styles.header__logo}>
        <img
          className={styles.header__img}
          src={logo}
          alt='Логотип компании Match Tracker'
        />
      </div>
      <div className={styles.header__info}>
        <p
          className={`${styles.header__error} ${error ? styles.header__error_active : ''}`}
        >
          Ошибка: не удалось загрузить информацию
          <img className={styles.error__icon} src={err} alt='иконка ошибки' />
        </p>
        <button
          type='button'
          onClick={handleUpdate}
          className={styles.header__refreshButton}
        >
          Обновить
          <img
            className={`${styles.refreshButton_img} ${isLoading || isAnimating ? styles.refreshButton_img_active : ''}`}
            src={refresh}
            alt='иконка обновления'
          />
        </button>
      </div>
    </div>
  );
};
