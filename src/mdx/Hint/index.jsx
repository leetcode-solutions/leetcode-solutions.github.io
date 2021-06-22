import React from 'react';

import Collapse from '../../components/Collapse';

const Hint = ({ children }) => {
  return (
    <Collapse
      label="Hint"
      style={{
        fontWeight: 600,
        opacity: 0.5,
      }}
    >
      {children}
    </Collapse>
  );
};

export default Hint;