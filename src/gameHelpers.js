export const gameWidth = 12;
export const gameHeight = 20;

export const createGameWindow = () => 
  Array.from(Array(gameHeight), () =>
    new Array(gameWidth).fill([0, 'clear'])
  )