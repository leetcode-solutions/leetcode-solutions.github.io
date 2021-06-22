import React from 'react';
import DifficultyColor, { toDifficulty } from '../DifficultyColor';

const Difficulty = (props) => {
  return <DifficultyColor {...props} >{`${toDifficulty(props)}`}</DifficultyColor>
};

export default Difficulty;