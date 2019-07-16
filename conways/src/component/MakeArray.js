
// Make a 2d array helper function

function Array2D(cols, rows){
    let arr = new Array(cols)
    for(let i =0; i< Array.length; i++){
        arr[i] = new Array(rows)
    }
    return arr;
}

class MakeArray{
    constructor(width, height){
        this.width = width;
        this.height = height;
        this.currentBufferIndex = 0;
        this.buffer = [ Array2D(width, height), Array2D(width, height)]
    }

    // Randomize life grid
    randomize =() => {
        for (let y = 0; y < this.height; y++) {
          for (let x = 0; x < this.width; x++) {
            this.buffer[this.currentBufferIndex][y][x] = Math.floor(Math.random() * 2);
          }
        }
    }

   // Clear the life grid
   clear() {
        for (let y = 0; y < this.height; y++) {
            this.buffer[this.currentBufferIndex][y].fill(0);
        }
   }

   // Extend the lConway life rules
   rules(){
    let count = 0;
    let sum = 0;
    const curBuffer
    for (let i = 0; i < this.height; i++) {
        for (let j = 0; j < this.width; j++) {
            //Edges
            if (i == 0 || i == height-1 || j == 0 || j == width -1)
                const next[i][j] = this.buffer[i][j]
        }

   }
}
    
}



export default MakeArray;