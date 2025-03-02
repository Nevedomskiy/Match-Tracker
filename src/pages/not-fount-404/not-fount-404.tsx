import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './not-fount-404.module.css';

export const NotFound404: FC = () => (
  <div className={styles.notfound}>
    <h3>
      Страница не найдена. Пожалуйста нажмите кнопку и вернитесь на главную
      страницу
    </h3>
    <NavLink className='notfound__replace' to={`/`}>
      На главную
    </NavLink>
  </div>
);
