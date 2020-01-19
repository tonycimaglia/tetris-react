import React from 'react';
import { StyledCell } from './styled-components/StyledCell'
import { TETROMINOS } from '../tetrominos';

const Cell = ( {type} ) => (
  <StyledCell type={'L'} color={TETROMINOS['L'].color} />
)

export default Cell;