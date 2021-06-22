import React, { useCallback, useRef, useState } from 'react';
import clsx from 'clsx';

import styles from './index.module.css';

const Collapse = ({children, label, ...props}) => {
  const [collapsed, setCollapsed] = useState(true);
  const [height, setHeight] = useState(undefined);

  const ref = useRef(null);

  const handleClick = useCallback((e) => {
    e?.preventDefault();
    if (!height) {
      setHeight(`${ref.current?.scrollHeight}px`)
    }

    setTimeout(() => setCollapsed((state) => !state), 100);
  }, [height]);

  return (
    <div
      className={clsx('card',
        styles.collapse,
        collapsed && styles.collapsed,
      )}
      onClick={handleClick}
    >
      <span
        className={styles['collapse-label']}
        onTransitionEnd={() => {
          if(collapsed) {
            setHeight(undefined);
          }
        }}
        {...props}
      >
        {label}
      </span>
      <div
        className={styles['collapse-content']}
        ref={ref}
        style={{ height: height }}
      >
        {children}
      </div>
    </div>
  );
};

export default Collapse;