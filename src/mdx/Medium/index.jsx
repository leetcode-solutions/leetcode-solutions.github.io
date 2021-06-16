import React from 'react';

import styles from './index.module.css';

const Medium = ({ children }) => (
  <div className={styles['lc-medium']} >
    {children}
  </div>
);

export default Medium;