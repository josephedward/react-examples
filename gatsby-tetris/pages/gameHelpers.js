export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 18;

export const createStage = () =>
  Array.from(Array(STAGE_HEIGHT), () =>
    new Array(STAGE_WIDTH).fill([0, "clear"])
  );

export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
  for (let y = 0; y < player.tetromino.length; y += 1) {
    for (let x = 0; x < player.tetromino[0].length; x += 1) {
      // 1. Confirm that we are on a tetromino cell
      if (player.tetromino[y][x] !== 0) {
        if (
          // 2. check that movement is inside of canvas height
          // we should not be able to go through floor
          !stage[y + player.pos.y + moveY] ||
          // 3. check that movement is inside of canvas width
          !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
          // 4. confirm that cell !== clear
          stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !==
            "clear"
        ) {
          return true;
        }
      }
    }
  }
};
