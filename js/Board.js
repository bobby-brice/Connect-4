class Board {
   constructor() {
       this.rows = 6;
       this.columns = 7;
       this.spaces = this.createSpaces();
   } 

   //generates 2D array of spaces
   // @return {array} an array of space objects

   createSpaces() {
       const spaces = [];

       for (let x = 0; x < this.columns; x++) {
           const col = [];

           for (let y = 0; y < this.rows; y++) {
               const space = new Space(x,y);
               col.push(space);
           }

           spaces.push(col);
       }

       return spaces;
   }

   //renders the board

   drawHTMLBoard () {
       for (let column of this.spaces){
           for (let space of column) {
                space.drawSVGSpace();
           }
       }
       
   }
}