import React from 'react';

import { createGameWindow } from '../gameHelpers'

import GameWindow from './GameWindow';
import Display from './Display';
import StartButton from './StartButton';

const Tetris = () => {

  return (
    <div>
      <GameWindow gameWindow ={createGameWindow()}/>
      <aside>
        <div>
          <Display text="Score"/>
          <Display text="Rows"/>
          <Display text="Level"/>
        </div>
        <StartButton />
      </aside>

    </div>
  )
}

export default Tetris;