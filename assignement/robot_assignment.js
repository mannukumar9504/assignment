const fs = require('fs');
const { alignCoordinates, moveForward, rotateLeft, rotateRight, verifyCoordinates} = require("./services/robot.service");
const inputPath = "./input/input.txt";

const robotPainiting = (inputPath) => {
  try {
    // Read input from a text file
    const input = fs.readFileSync(inputPath, 'utf8');

    // Parse the input
    const lines = input.split('\n');
    const [width, height] = lines[0].split(' ').map(Number);


    // Initialize the paiting grid
    const grid = Array.from({ length: height }, () => Array(width).fill('E'));


    // Process each robot's commands
    for (let i = 1; i < lines.length; i += 2) {

      const [x, y, direction, color] = lines[i].split(' ');

      const commands = lines[i + 1];

      const [alignedX, alignedY] = alignCoordinates(grid, x, y);

      let robotX = parseInt(alignedX);
      let robotY = parseInt(alignedY);
      let robotDirection = direction;

      verifyCoordinates(grid, robotX,robotY); // to check coordinate is valid or not

      // Execute each command
      for (const command of commands) {
        switch (command) {
          case 'L':
            robotDirection = rotateLeft(robotDirection);
            break;
          case 'R':
            robotDirection = rotateRight(robotDirection);
            break;
          case 'F':
            [robotX, robotY] = moveForward(robotX, robotY, robotDirection);
            break;
          case 'I':
            {
              if (grid[robotY][robotX] === 'E') {
                grid[robotY][robotX] = color;
              } else if (grid[robotY][robotX] !== 'E') {
                grid[robotY][robotX] = 'Y';
              }
              break;
            }
        }
      }
    }

    // Generate the output
    const output = grid.map(row => row.join('')).join('\n');

    // Print the output
    return output;
  } catch (err) {
    return err?.message ? err.message : err;
  }
}


console.log(robotPainiting(inputPath));
module.exports = {
  robotPainiting
}

/**
 * Input 
 * ------
 * 5 5
 * 0 0 N R
 * FFRFIFIRFIF
 * 4 0 N G
 * FLFFRFIRFILFLFI
 */

/**
* Output
---------
*
*EEEEE
*EEGEE
*ERYGE
*EEREE
*EEEEE
*/