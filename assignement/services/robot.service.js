const { message } = require("../constant/constant");
// Definec functions for robot movements
const moveForward = (x, y, direction) => {
    switch (direction) {
      case 'N': return [x, y - 1];
      case 'E': return [x + 1, y];
      case 'S': return [x, y + 1];
      case 'W': return [x - 1, y];
    }
  };
  
  const rotateLeft = (direction) => {
    switch (direction) {
      case 'N': return 'W';
      case 'E': return 'N';
      case 'S': return 'E';
      case 'W': return 'S';
    }
  };
  
  const rotateRight = (direction) => {
    switch (direction) {
      case 'N': return 'E';
      case 'E': return 'S';
      case 'S': return 'W';
      case 'W': return 'N';
    }
  };
  // function to arrange array indexes as 2D CO-ORDINATES
  const alignCoordinates = (grid, x,y) => { 
      let alignedY = y;
      let alignedX = x;
      if(x == 0 && y == 0) { 
          alignedY = ((grid.length -1) - x);
      }
      if(x > 0) {
          alignedY = ((grid.length -1) - y);
      }
      if(x == 0 && y > 0) {
        alignedY = ((grid.length -1) -y);
      }
      return [alignedX, alignedY];
  };
  //fucntion to verify that coordinate value is valid or not
  const verifyCoordinates = (grid, x, y) => {
    //co-ordinate value never go beyond grid
    if(x > (grid.length-1) || x < 0 || y > (grid[0].length-1) || y <0) {
      throw new Error(message.INPUT_ERROR);
    }
    return true;
  }


  module.exports = {
    moveForward,
    rotateRight,
    rotateLeft,
    alignCoordinates,
    verifyCoordinates
  }