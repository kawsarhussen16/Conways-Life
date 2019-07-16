
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
        this.buffer = [ Array2D(width, height), Array2D(width, height)]
    }
    
}
