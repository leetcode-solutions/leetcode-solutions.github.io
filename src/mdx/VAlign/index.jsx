import React from 'react';
import clsx from 'clsx';

import styles from './index.module.css';

const VAlign = ({ children, className, ...props }) => {
  return (
    <div className={clsx(styles.vAlign, className)} {...props}>
      {children}
    </div>
  );
};

export default VAlign;