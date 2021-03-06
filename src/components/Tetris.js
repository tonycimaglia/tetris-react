import React from 'react';

// styled components
import { StyledTetris, StyledTetrisWrapper } from './styled-components/StyledTetris'

import GameWindow from './GameWindow';
import Display from './Display';
import StartButton from './StartButton';

const Tetris = () => {
  return (
    <StyledTetrisWrapper>
      <StyledTetris>
        <GameWindow gameWindow ={createGameWindow()}/>
        <aside>
          <div>
            <Display text="Score"/>
            <Display text="Rows"/>
            <Display text="Level"/>
          </div>
          <StartButton />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  )
}

export default Tetris;