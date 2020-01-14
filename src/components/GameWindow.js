import React from 'react';

import Cell from './Cell';

const GameWindow = ( { gameWindow } ) => (
  <div>
    {gameWindow.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
  </div>
)

export default GameWindow;