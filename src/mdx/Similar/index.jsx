import React from 'react';
import Link from '@docusaurus/Link';
import { DifficultyColor } from '..';

const Similar = ({ title, ...props }) => {
  const href = `../${title.toLowerCase().replace(/\s+/g, '-')}`;
  return (
    <DifficultyColor {...props}>
      <p>
        <Link to={href}>
          {title}
        </Link>
      </p>
    </DifficultyColor>
  );
};

export default Similar;