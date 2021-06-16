import React from 'react';

import styles from './index.module.css';

const Easy = ({ children }) => (
  <div className={styles['lc-easy']} >
    {children}
  </div>
);

export default Easy;