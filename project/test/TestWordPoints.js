var assert = require('assert');
describe('WordValidation', function() {
  describe('#isPositionFreeTrue())', function() {

    let word = {
        'M':[5,3],
        'A':[5,4],
        'I':[5,5],
        'Z':[5,6],
        'E':[5,7],
    }
    let board = {};

    it('should return true since board is empty', function() {
      assert.equal(isPositionFree(board, word), true);
    });
    
  });

  describe('#isPositionFreeNegative())', function() {

    let word = {
        'M':[5,3],
        'A':[5,4],
        'I':[5,5],
        'Z':[5,6],
        'E':[5,7],
    }
    let board = {'A':[5,4],};

    it('should return true since board is empty', function() {
      assert.equal(isPositionFree(board, word), false);
    });

  });


  describe('#isAdjacentEmpty())', function() {

    let word = {
        'M':[5,3],
        'A':[5,4],
        'I':[5,5],
        'Z':[5,6],
        'E':[5,7],
    }
    let board = {};

    it('should return true since board is empty', function() {
      assert.equal(isAdjacent(board, word), true);
    });
    
  });

  describe('#isAdjacentTrue())', function() {

    let word = {
      'M':[5,3],
      'A':[5,4],
      'I':[5,5],
      'Z':[5,6],
      'E':[5,7],
    }
    let board = {
      'M':[5,3],
      'A':[6,3],
      'I':[7,3],
      'Z':[8,3],
      'E':[9,3],
    };

    it('should return true since board is empty', function() {
      assert.equal(isAdjacent(board, word), true);
    });
  
  });

  describe('#isAdjacentFalse())', function() {

    let word = {
      'M':[5,3],
      'A':[5,4],
      'I':[5,5],
      'Z':[5,6],
      'E':[5,7],
    }
    let board = {
      'E':[9,3],
    };

    it('should return true since board is empty', function() {
      assert.equal(isAdjacent(board, word), false);
    });
  
  });
});

function isPositionFree(board, newWord){
  // Make sure the inputted tile is in a free position
  oldPositions = Object.values(board);
  newPositions = Object.values(newWord);

  for ( tile of oldPositions) {
      for ( newTile of newPositions){
          if (tile[0] == newTile[0] && tile[1] == newTile[1]){
              return false;
          }
      }
  }
  return true;
}

function isAdjacent(board, newWord){
  //  Make sure the inputted tile is adjacent to the current board
  oldPositions = Object.values(board);
  newPositions = Object.values(newWord);

  adjacentPositions = [];
  if (oldPositions.length == 0) {
      adjacentPositions.push([5,5]);
  } else {
      for (tiles of oldPositions) {
          n = 11
  
          if (tiles[0] < n-1){
              //  Right Adjacent Tile 
              adjacentPositions.push([tiles[0]+1,tiles[1]]);
          }
          if (tiles[0] > 0){ 
              //  Left adjacent tile
              adjacentPositions.push([tiles[0]-1,tiles[1]]);
          }
          if (tiles[1] < n-1) { 
              // Bottom adjacent tile
              adjacentPositions.push([tiles[0],tiles[1]+1]);
          }
          if (tiles[1] > 0){ 
              // Top Adjacent Tile
              adjacentPositions.push([tiles[0],tiles[1]-1]);
          }
      }
  }    
  
  // console.log(adjacentPositions)
  //  If one of the new tiles is in an adjacent space we return true
  for ( tile of adjacentPositions) {
      for ( newTile of newPositions){
          if (tile[0] == newTile[0] && tile[1] == newTile[1]){
              return true;
          }
      }
  }
  return false;

}
