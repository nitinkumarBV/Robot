function moveRobot(initialX, initialY, initialDirection, instructions) {
    const directions = ['N', 'E', 'S', 'W'];
    let currentX = initialX;
    let currentY = initialY;
    let currentDirection = initialDirection;
    
    return { x: currentX, y: currentY, direction: currentDirection };
  }
 
  const result = moveRobot(0, 0, 'E', 'RFFF');
  console.log(result);