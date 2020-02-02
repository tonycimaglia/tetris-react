import { useState } from 'react';
import { createGameWindow } from '../gameHelpers';

import { randomTetromino } from '../tetrominos';

export const useStage = () => {
  const [window, setWindow] = useState(createGameWindow())

  return [window, setWindow];
};