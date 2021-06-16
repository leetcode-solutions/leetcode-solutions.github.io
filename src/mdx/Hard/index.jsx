import React from 'react';

import styles from './index.module.css';

const Hard = ({ children }) => (
  <div className={styles['lc-hard']} >
    {children}
  </div>
);

export default Hard;