import React from 'react';

import styles from './index.module.css';

export const toDifficulty = ({ e, m, h }) => (
  e ? 'Easy'
    : m ? 'Medium'
      : h ? 'Hard'
        : ''
);

export const Easy = ({ children }) => <DifficultyColor e>{children}</DifficultyColor>;

export const Medium = ({ children }) => <DifficultyColor m>{children}</DifficultyColor>;

export const Hard = ({ children }) => <DifficultyColor h>{children}</DifficultyColor>;

const DifficultyColor = ({ children, ...props }) => (
  <div className={styles[`lc-${toDifficulty(props).toLowerCase()}`]} >
    {children}
  </div>
);

export default DifficultyColor;