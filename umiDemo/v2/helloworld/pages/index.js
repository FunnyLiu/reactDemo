import React from 'react';
import Link from 'umi/link';
import styles from './index.css';

export default () => {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <Link to="/users">go to /users</Link>
    </div>
  );
}
