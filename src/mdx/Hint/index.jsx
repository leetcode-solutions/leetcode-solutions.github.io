import React from 'react';

import styles from './index.module.css';

import Collapse from '../../components/Collapse';

const Hint = ({ children }) => {
  return (
    <Collapse
      label="Hint"
      className={styles['lc-hint']}
    >
      {children}
    </Collapse>
  );
};

export default Hint;