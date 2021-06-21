import React from 'react';

import styles from './index.module.css';

const VAlign = ({ children }) => {
  return (
    <div className={styles.vAlign}>
      {children}
    </div>
  );
};

export default VAlign;