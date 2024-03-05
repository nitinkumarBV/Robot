function moveRobot(initialX, initialY, initialDirection, instructions) {
    const directions = ['N', 'E', 'S', 'W'];
    let currentX = initialX;
    let currentY = initialY;
    let currentDirection = initialDirection;
    
    const moveForward = {
        N: () => currentY++,
        E: () => currentX++,
        S: () => currentY--,
        W: () => currentX--,
      };
      const turnRight = {
        N: () => (currentDirection = 'E'),
        E: () => (currentDirection = 'S'),
        S: () => (currentDirection = 'W'),
        W: () => (currentDirection = 'N'),
      };
      
    return { x: currentX, y: currentY, direction: currentDirection };
  }
 
  const result = moveRobot(0, 0, 'E', 'RFFF');
  console.log(result);