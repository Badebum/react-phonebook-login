import React from 'react';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSixe: 48,
    textAlign: 'center',
  },
};

const HomeView = () => (
  <div style={styles.container}>
    <h1 style={styles.title}>
      {' '}
      Приветствення страничка сервиса{' '}
      <span role="img" aria-label="Иконка приветствия">
        Ё
      </span>
    </h1>
  </div>
);
export default HomeView;
