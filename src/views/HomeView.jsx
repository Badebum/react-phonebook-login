import React from 'react';
import styles from './HomeView.module.css';

const HomeView = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>
      Телефонная книга тайных агентов
      <span role="img" aria-label="Иконка приветствия">
        '=)'
      </span>
    </h1>
  </div>
);
export default HomeView;
