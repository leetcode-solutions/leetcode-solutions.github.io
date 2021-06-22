import React from 'react';

import VAlign from '../VAlign';

const Example = ({ children }) => {
  return (
    <div className="card">
      <VAlign>
        { children }
      </VAlign>
    </div>
  );
};

export default Example;