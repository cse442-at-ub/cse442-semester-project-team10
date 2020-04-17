import dictionary from '../../data/dictionary.json'
import letterValues from '../../data/letterValues.json'

export default function SpecialTiles() {

    const n = 11;
    let special_tiles = new Array(n);
    for(var i = 0; i < n; i++){
        special_tiles[i] = new Array(n);
    }

    special_tiles[0][0]  = 'TL';
    special_tiles[0][2]  = 'TW';
    special_tiles[0][8]  = 'TW';
    special_tiles[0][10] = 'TL';
    
    special_tiles[1][1]  = 'DW';
    special_tiles[1][5]  = 'DW';
    special_tiles[1][10] = 'DL';
    
    special_tiles[2][0]  = 'TW';
    special_tiles[2][2]  = 'DL';
    special_tiles[2][4]  = 'DL';
    special_tiles[2][6]  = 'DL';
    special_tiles[2][8]  = 'DL';
    special_tiles[2][10] = 'TW';
    
    special_tiles[3][3]  = 'TL';
    special_tiles[3][7]  = 'TL';
    
    special_tiles[4][2]  = 'DL';
    special_tiles[4][8]  = 'DL';
    
    special_tiles[4][1]  = 'DW';
    special_tiles[4][9]  = 'DW';
    
    special_tiles[6][2]  = 'DL';
    special_tiles[6][8]  = 'DL';
    
    special_tiles[7][3]  = 'TL';
    special_tiles[7][7]  = 'TL';

    special_tiles[8][0]  = 'TW';
    special_tiles[8][2]  = 'DL';
    special_tiles[8][4]  = 'DL';
    special_tiles[8][6]  = 'DL';
    special_tiles[8][8]  = 'DL';
    special_tiles[8][10] = 'TW';
        
    special_tiles[9][1]  = 'DW';
    special_tiles[9][5]  = 'DW';
    special_tiles[9][10] = 'DW';
    
    special_tiles[10][0]  = 'TL';
    special_tiles[10][2]  = 'TW';
    special_tiles[10][8]  = 'TW';
    special_tiles[10][10] = 'TL';

    console.log(special_tiles);
    return (
        special_tiles
    );   
    
  }