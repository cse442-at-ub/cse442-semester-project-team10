// import SpecialTiles from './SpecialTiles';

function WordPoints(){
    // Word which will be inputted
    console.log('Word to test:');
    let word = {
        'M':[5,3],
        'A':[5,4],
        'I':[5,5],
        'Z':[5,6],
        'E':[5,7],
    }
    console.log(word)


    console.log('Initialize Board:');
    // Words WIth Friends Board (Empty)
    let board = {};
    console.log(board);


    // Check if word is valid
    console.log('Is Position Free:');
    console.log(isPositionFree(board, word));

    console.log('Is Adjacent to old tiles: ');
    console.log(isAdjacent(board, word));


    word = {
        'M':[5,3],
        'A':[5,4],
        // 'I':[5,5],
        'Z':[5,6],
        'E':[5,7],
    }
    console.log(word);

    console.log('Is Adjacent to old tiles: ');
    console.log(isAdjacent(board, word));


    console.log('New Board:');
    // Add a word to the board
    console.log(Object.assign(board, word));

    console.log('Tiles to play:');
    word = {
        'M':[5,3],
        'A':[6,3],
        'I':[7,3],
        'Z':[8,3],
        'E':[9,3],
    }
    console.log(word);

    console.log(word);

    console.log('Is Position Free: ');
    console.log(isPositionFree(board, word));

    console.log('Is Adjacent to old tiles: ');
    console.log(isAdjacent(board, word));

    word = {
        // 'M':[5,3],
        // 'A':[6,3],
        'I':[7,3],
        'Z':[8,3],
        'E':[9,3],
    }
    console.log(word);

    console.log('Is Adjacent to old tiles: ');
    console.log(isAdjacent(board, word));



    // calculate points

    return 17;
}

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
        adjacentPositions.add([5,5]);
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
