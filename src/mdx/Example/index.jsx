import React from 'react';
import clsx from 'clsx';

import styles from './index.module.css';

import VAlign from '../VAlign';

const Example = ({ children }) => {
  return (
    <VAlign className={clsx('card', styles.example)}>
      { children }
    </VAlign>
  );
};

export default Example;