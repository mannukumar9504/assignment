const assert = require('assert');
const {moveForward, rotateLeft, rotateRight, alignCoordinates} = require("../services/robot.service")
const { grid } = require("./mocks/test.mock");
const { robotPainiting } = require("../robot_assignment");
  
// We can group similar tests inside a describe block
describe("testing flow", () => {
  before(() => {
    console.log( "testing starts" );
  });
  
  after(() => {
    console.log( "testing completed" );
  });
      
  // We can add nested blocks for different tests
  describe( "check robot move test", () => {
      
      it("check robot move forward test when direction is West facing", () => {
          assert.deepStrictEqual(
              moveForward(4, 1, 'W'),
              [3,1]
            );
      });

      it("check robot move forward test when direction is East facing", () => {
        assert.deepStrictEqual(
            moveForward(4, 1, 'E'),
            [5,1]
        );
    });

    it("check robot move forward test when direction is North facing", () => {
        assert.deepStrictEqual(
            moveForward(4, 2, 'N'),
            [4,1]
        );
    });

    it("check robot move forward test when direction is North facing", () => {
        assert.deepStrictEqual(
            moveForward(4, 2, 'S'),
            [4,3]
        );
    });
  
  });
  
  describe("check robot rotate left testings", () => {
    beforeEach(() => {
      console.log( "executes before every test" );
    });
      
    it("check robot rotate left test when facing to West", () => {
        assert.equal(
            rotateLeft('W'),
            'S'
          );
    });
    it("check robot rotate left test when facing to East", () => {
        assert.equal(
            rotateLeft('E'),
            'N'
          );
    });
    it("check robot rotate left test when facing to South", () => {
        assert.equal(
            rotateLeft('S'),
            'E'
          );
    });
    it("check robot rotate left test when facing to North", () => {
        assert.equal(
            rotateLeft('N'),
            'W'
          );
    });

  });

  describe("check robot rotate Right testings", () => {
    beforeEach(() => {
      console.log( "executes before every test" );
    });
      
    it("check robot rotate right test when facing West", () => {
        assert.equal(
            rotateRight('W'),
            'N'
          );
    });
    it("check robot rotate right test when facing East", () => {
        assert.equal(
            rotateRight('E'),
            'S'
          );
    });
    it("check robot rotate right test when facing North", () => {
        assert.equal(
            rotateRight('N'),
            'E'
          );
    });
    it("check robot rotate right test when facing South", () => {
        assert.equal(
            rotateRight('S'),
            'W'
          );
    });

  });

  describe("check index reference for cell index", () => {
    beforeEach(() => {
      console.log( "executes before every test" );
    });
    
    // co-ordinate 0,0 to 0,4
    it("check robot cell index for 0,0", () => {
        const result = alignCoordinates(grid, 0, 0)
        assert.deepStrictEqual(
            result,
            [0,4]
          );
    });
    it("check robot cell index for 0,1", () => {
        const result = alignCoordinates(grid,0, 1);
        assert.deepStrictEqual(
            result,
            [0,3]
          );
    });
    it("check robot cell index for 0,2", () => {
        assert.deepStrictEqual(
            alignCoordinates(grid,0, 2),
            [0,2]
          );
    });
    it("check robot cell index for 0,3", () => {
        assert.deepStrictEqual(
            alignCoordinates(grid,0, 3),
            [0,1]
          );
    });
    it("check robot cell index for 0,4", () => {
        assert.deepStrictEqual(
            alignCoordinates(grid,0, 4),
            [0,0]
          );
    });


    //co-ordinate 1,0 to 1,4
    it("check robot cell index for 1,0", () => {
        assert.deepStrictEqual(
            alignCoordinates(grid,1, 0),
            [1,4]
          );
    });
    it("check robot cell index for 1,1", () => {
        assert.deepStrictEqual(
            alignCoordinates(grid,1, 1),
            [1,3]
          );
    });
    it("check robot cell index for 1,2", () => {
        assert.deepStrictEqual(
            alignCoordinates(grid,1, 2),
            [1,2]
          );
    });
    it("check robot cell index for 1,3", () => {
        assert.deepStrictEqual(
            alignCoordinates(grid, 1, 3),
            [1,1]
          );
    });
    it("check robot cell index for 1,4", () => {
        assert.deepStrictEqual(
            alignCoordinates(grid,1, 4),
            [1,0]
          );
    });


   //co-ordinate 2,0 to 2,4
    it("check robot cell index for 2,0", () => {
        assert.deepStrictEqual(
            alignCoordinates(grid,2, 0),
            [2,4]
          );
    });
    it("check robot cell index for 2,1", () => {
        assert.deepStrictEqual(
            alignCoordinates(grid,2, 1),
            [2,3]
          );
    });
    it("check robot cell index for 2,2", () => {
        assert.deepStrictEqual(
            alignCoordinates(grid,2, 2),
            [2,2]
          );
    });
    it("check robot cell index for 1,3", () => {
        assert.deepStrictEqual(
            alignCoordinates(grid, 2, 3),
            [2,1]
          );
    });
    it("check robot cell index for 2,4", () => {
        assert.deepStrictEqual(
            alignCoordinates(grid,2, 4),
            [2,0]
          )
    });


    // co-ordinate 3,0 to 3,4
    it("check robot cell index for 3,0", () => {
        assert.deepStrictEqual(
            alignCoordinates(grid,3, 0),
            [3,4]
          );
    });
    it("check robot cell index for 3,1", () => {
        assert.deepStrictEqual(
            alignCoordinates(grid,3, 1),
            [3,3]
          );
    });
    it("check robot cell index for 3,2", () => {
        assert.deepStrictEqual(
            alignCoordinates(grid,3, 2),
            [3,2]
          );
    });
    it("check robot cell index for 3,3", () => {
        assert.deepStrictEqual(
            alignCoordinates(grid, 3, 3),
            [3,1]
          );
    });
    it("check robot cell index for 3,4", () => {
        assert.deepStrictEqual(
            alignCoordinates(grid,3, 4),
            [3,0]
          )
    });

    //co-ordinate 4,0 to 4,4
     it("check robot cell index for 4,0", () => {
        assert.deepStrictEqual(
            alignCoordinates(grid,4, 0),
            [4,4]
          );
    });
    it("check robot cell index for 4,1", () => {
        assert.deepStrictEqual(
            alignCoordinates(grid,4, 1),
            [4,3]
          );
    });
    it("check robot cell index for 4,2", () => {
        assert.deepStrictEqual(
            alignCoordinates(grid,4, 2),
            [4,2]
          );
    });
    it("check robot cell index for 4,3", () => {
        assert.deepStrictEqual(
            alignCoordinates(grid, 4, 3),
            [4,1]
          );
    });
    it("check robot cell index for 4,4", () => {
        assert.deepStrictEqual(
            alignCoordinates(grid,4, 4),
            [4,0]
          )
    });

  });
  
  describe("to test complete function to painting by Robots", () => {
    beforeEach(() => {
        console.log( "executes before every test" );
      });
      const inputPath = "./input/input.txt";
      const inputFailurePath = "./input/input_failure.txt";
      // co-ordinate 0,0 to 0,4
      it("check robot painting for success", () => {
          const result = robotPainiting(inputPath);
          assert.deepStrictEqual(
              result,
              "EEEEE\nEEGEE\nERYGE\nEEREE\nEEEEE"
            );
      });
      it("check robot painting for failure", () => {
        const result = robotPainiting(inputFailurePath);
        assert.deepStrictEqual(
            result,
            "please provide valid input"
          );
    });
  })
});