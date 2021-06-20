import React from 'react';
import { Easy, Medium, Hard } from '..';

const difficulty = ({ e, m, h}) => (
  e ? { tag: Easy, label: 'Easy' }
    : m ? { tag: Medium, label: 'Medium' }
      : h ? { tag: Hard, label: 'Hard' }
        : { tag: 'div', label: '[error]' }
);

const Difficulty = (props) => {
  const { tag: Tag, label } = difficulty(props);
  return <Tag>{`${label}`}</Tag>
};

export default Difficulty;