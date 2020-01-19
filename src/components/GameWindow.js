import React from 'react';
import { StyledGameWindow } from './styled-components/StyledGameWindow';

import Cell from './Cell';

const GameWindow = ( { gameWindow } ) => (
  <StyledGameWindow width={gameWindow[0].length} height={gameWindow.length}>
    {gameWindow.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
  </StyledGameWindow>
)

export default GameWindow;