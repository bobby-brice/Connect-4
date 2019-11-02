class Token {
  constructor(index, owner) {
    this.owner = owner;
    this.id = `token-${index}-${owner.id}`;
    this.dropped = false;
    this.columnLocation = 0;
  }

  get htmlToken() {
      return document.getElementById(this.id);
  }

  //getter method to tell us how far left the token element is relative to its closest ancestor without a static position. 
  //@return {number} - left offset of the token object, htmlToken
  get offsetLeft() {
      return this.htmlToken.offsetLeft;
  }
  
  drawHTMLToken() {

    const drawToken = document.createElement('div');
    document.getElementById('game-board-underlay').appendChild(drawToken);
    drawToken.setAttribute("id", this.id);
    drawToken.setAttribute("class", "token");
    drawToken.style.backgroundColor = this.owner.color;
  }

  //moves the htmlToken one column to the left
  moveLeft() {
      if (this.columnLocation > 0) {
          this.htmlToken.style.left = this.offsetLeft - 76; //updates the position of the htmlToken
          this.columnLocation -= 1; //updates the current column location
      }
  }

  //moves the htmlToken one column to the right
  moveRight(columns) {
      if (this.columnLocation < columns - 1) { //ensures we can't move left if we're at column 0.
        this.htmlToken.style.left = this.offsetLeft + 76;
        this.columnLocation += 1;
      }
  }


/** 
 * Drops html token into targeted board space.
 * @param   {Object}    Targeted space for dropped token.
 * @param   {function}  The reset function to call after the drop animation has completed.
 */
    drop(target, reset) {
        this.dropped = true;

        $(this.htmlToken).animate({
            top: (target.y * target.diameter)
        }, 750, 'easeOutBounce', reset);
    } 
}