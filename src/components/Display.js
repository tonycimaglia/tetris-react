import React from 'react';
import {StyledDisplay} from './styled-components/StyledDisplay';

const Display = ( { gameOver, text } ) => (
  <StyledDisplay gameOver={gameOver}>
    {text}
  </StyledDisplay>
)

export default Display;