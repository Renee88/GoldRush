class GoldRush extends Matrix {
    constructor(rows, cols) {
        super(rows, cols)
        this.score1 = 0
        this.score2 = 0
        this.win = ""
        this.coins = 0
    }


    loadBoard() {
        if (this.rows === 0 && this.cols === 0) {
            this.matrix = []
            return
        }
        this.matrix = []
        let elements = ["coin", ".", "wall"]
        let coins = 0
        for (let i = 0; i < this.rows; i++) {
            this.matrix.push([])
            for (let j = 0; j < this.cols; j++) {
                if (i % 2 !== 0) {
                    let randIndex = Math.floor(Math.random() * 2)
                    let randElement = elements[randIndex]
                    this.matrix[i].push(randElement)
                    if (randElement === "coin") {
                        coins++
                    }
                } else if (i % 2 === 0) {
                    let wallIndex = 2
                    let wall = elements[wallIndex]
                    this.matrix[i].push(wall)

                }

            }

            let rand = Math.ceil(Math.random() * 2)
            for (let k = 1; k < this.cols; k = k + rand) {
                rand++
                let randIndex = Math.floor(Math.random() * 2)
                let randElement = elements[randIndex]
                this.matrix[i][k] = randElement
                if (randElement === "coin") {
                    coins++
                }
            }


        }

        let lastRowIndex = this.rows - 1
        let lastColIndex = this.cols - 1
        this.matrix[0][0] = "player1"
        this.matrix[lastRowIndex][lastColIndex] = "player2"
        this.coins = coins

        if (coins < 10) {
            return this.loadBoard()
        } else {
            return this.matrix
        }
    }

    _checkWin(player) {
        let playerNum = player.slice(-1)
        let score = "score" + playerNum
        if (this[score] === 100) {
            this.win = player
            return this.win
        }
    }

    _checkOtherPlayer(player){
        let otherPlayer
        if (player === "player1") {
            otherPlayer = "player2"
            return otherPlayer
        } else if (player === "player2") {
            otherPlayer = "player1"
            return otherPlayer
        }
    }

    _moveDown(currRow, currCol, player) {

        let otherPlayer = this._checkOtherPlayer(player)
        currRow++
        
        if (!this.matrix[currRow]) {
            return
        } else if (this.matrix[currRow][currCol] != "wall" && this.matrix[currRow][currCol] != otherPlayer) {
            if (this.matrix[currRow][currCol] === "coin") {
                this._score(player)
            }
            let prevRow = currRow - 1
            this.matrix[prevRow][currCol] = "."
            this.matrix[currRow][currCol] = player
        }

        return this._checkWin(player)

    }

    _moveUp(currRow, currCol, player) {

        let otherPlayer = this._checkOtherPlayer(player)
        currRow--
        
        if (!this.matrix[currRow]) {
            return
        } else if (this.matrix[currRow][currCol] != "wall" && this.matrix[currRow][currCol] != otherPlayer) {
            if (this.matrix[currRow][currCol] === "coin") {
                this._score(player)
            }
            let prevRow = currRow + 1
            this.matrix[prevRow][currCol] = "."
            this.matrix[currRow][currCol] = player
        }

        return this._checkWin(player)

    }


    _moveRight(currRow, currCol, player) {

        let otherPlayer = this._checkOtherPlayer(player)
        currCol++
        
        if (!this.matrix[currCol]) {
            return
        } else if (this.matrix[currRow][currCol] != "wall" && this.matrix[currRow][currCol] != otherPlayer) {
            if (this.matrix[currRow][currCol] === "coin") {
                this._score(player)
            }
            let prevCol = currCol - 1
            this.matrix[currRow][prevCol] = "."
            this.matrix[currRow][currCol] = player
        }

        return this._checkWin(player)

    }

    _moveLeft(currRow, currCol, player) {

        let otherPlayer = this._checkOtherPlayer(player)
        currCol--
        
        if (!this.matrix[currCol]) {
            return
        } else if (this.matrix[currRow][currCol] != "wall" && this.matrix[currRow][currCol] != otherPlayer) {
            if (this.matrix[currRow][currCol] === "coin") {
                this._score(player)
            }
            let prevCol = currCol + 1
            this.matrix[currRow][prevCol] = "."
            this.matrix[currRow][currCol] = player

        }

        return this._checkWin(player)
    }

    movePlayer(player, direction) {


        let currCol
        let currRow

        for (let row in this.matrix) {
            for (let column in this.matrix[row]) {
                if (this.matrix[row][column] === player) {
                    currCol = column
                    currRow = row
                }
            }
        }

        if (direction === "down") {
            this._moveDown(currRow, currCol, player)
        }

        if (direction === "up") {
            this._moveUp(currRow, currCol, player)
        }


        if (direction === "right") {
            this._moveRight(currRow, currCol, player)
        }

        if (direction === "left") {
            this._moveLeft(currRow, currCol, player)
        }

    }



    _score(player) {
        let playerNum = player.slice(-1)
        let score = "score" + playerNum
        this[score] += 10
        console.log(this[score])
    }

}


