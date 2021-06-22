import React, { useCallback, useRef, useState } from 'react';
import clsx from 'clsx';

import styles from './index.module.css';

const Collapse = ({children, label, className, ...props}) => {
  const [collapsed, setCollapsed] = useState(true);
  const [height, setHeight] = useState(undefined);
  const [contentVisible, setContentVisible] = useState(false);

  const ref = useRef(null);

  const handleClick = useCallback((e) => {
    e.preventDefault();
    if (!height) {
      setHeight(`${ref.current?.scrollHeight}px`);
      setContentVisible(true);
    }

    setTimeout(() => setCollapsed((state) => !state), 100);
  }, [height]);

  return (
    <button
      className={clsx('card',
        styles.collapse,
        collapsed && styles.collapsed,
      )}
      onClick={handleClick}
    >
      <span
        className={clsx(
          styles['collapse-label'],
          className,
        )}
        onTransitionEnd={() => {
          if(collapsed) {
            setHeight(undefined);
            setTimeout(() => setContentVisible(false), 200);
          }
        }}
        {...props}
      >
        {label}
      </span>
      <div
        className={styles['collapse-content']}
        ref={ref}
        onClick={(e) => { e.stopPropagation(); }}
        style={{ height: height, visibility: contentVisible ? 'visible' : 'hidden' }}
      >
        {children}
      </div>
    </button>
  );
};

export default Collapse;