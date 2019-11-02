class Player {
    constructor(name, id, color, active = false) {
        this.name = name;
        this.id = id;
        this.color = color;
        this.active = active;
        this.tokens = this.createTokens(21); 
    }   
    //creates token objects for player
    //@param {integer} num = number of token objects to be returned

    createTokens(num) {
        const tokens = [];

        for (let i = 0; i < num; i++) {
            let token = new Token(i, this);
            tokens.push(token);
        }
        return tokens;
    }

    //Gets all tokens that haven't been dropped.
    //@return {array} Array of unused tokens

    get unusedTokens () {
        return this.tokens.filter(token => !token.dropped);

        // alternate solution
        //const tokensremaining = [];
        //for (let i = 0; i <this.tokens.length; i++) {
        // if (!this.tokens[i].dropped) { tokensRemaining.push(this.tokens[i])}
        //}
        }

    //gets the active token by returning the first token in the array of unused tokens.
    //@return {object} First token object in the array of unused tokens
    get activeToken() {
        return this.unusedTokens[0];
    }     
    
    /**
     * check if a player has any undropped tokens left
     * @return {boolean}
     */
    checkTokens () {
        return this.unusedTokens.length == 0 ? false : true;
    }
}