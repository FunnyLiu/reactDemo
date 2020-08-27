import React from 'react';
import router from 'umi/router';
import styles from './users.css';

export default () => {
  return (
    <div>
      <h1 className={styles.title}>Page users</h1>
      <button onClick={() => { router.goBack(); }}>go back</button>
    </div>
  );
}
