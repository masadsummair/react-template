import React from 'react';

import logo from 'assets/img/logo.svg';
import styles from 'views/pages/Home/Home.module.scss';

import { Link } from 'react-router-dom';

const Counter = React.memo(React.lazy(() => import('features/counter/Counter')));

export default function Home() {
  return (
    <header className={styles.home}>
      <img src={logo} className={styles['home-logo']} alt="logo" />
      <Counter />

      <p>
        You are in
        {' '}
        <code>{process.env.NODE_ENV}</code>
        {' '}
        mode.
      </p>

      <p>
        REACT_APP_BACKEND is set to
        {' '}
        <code>{process.env.REACT_APP_BACKEND}</code>
        {' '}
        in the .env files.
      </p>

      <p>
        Edit
        {' '}
        <code>src/App.tsx</code>
        {' '}
        and save to reload.
      </p>

      <p>
        Routes:
        <Link to="/">Home</Link>
        &nbsp;
        <Link to="/other">Empty Route</Link>
      </p>

      <span>
        <span>Learn </span>
        <a
          className={styles['home-link']}
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React
        </a>
        <span>, </span>

        <a
          className={styles['home-link']}
          href="https://redux.js.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Redux
        </a>
        <span>, </span>

        <a
          className={styles['home-link']}
          href="https://redux-toolkit.js.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Redux Toolkit
        </a>
        ,
        <span> and </span>

        <a
          className={styles['home-link']}
          href="https://react-redux.js.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Redux
        </a>
      </span>
    </header>
  );
}