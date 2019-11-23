let stack = new Stack()

class GoldRush extends Matrix {
    constructor(rows, cols) {
        super(rows, cols)
        this.score1 = 0
        this.score2 = 0
    }

    loadBoard() {
        if (this.rows === 0 && this.cols === 0) {
            return
        }
        this.matrix = []
        let elements = ["coin", "wall", "."]
        for (let i = 0; i < this.rows; i++) {
            this.matrix.push([])
            for (let j = 0; j < this.cols; j++) {
                let randIndex = Math.floor(Math.random() * 3)
                let randElement = elements[randIndex]
                this.matrix[i].push(randElement)
            }
        }
        let lastRowIndex = this.rows - 1
        let lastColIndex = this.cols - 1
        this.matrix[0][0] = "player1"
        this.matrix[lastRowIndex][lastColIndex] = "player2"

        let c = 0
        let r = 0

        for (let r in this.matrix) {
            for (let c in this.matrix[r]) {
                if (this.matrix[r][c] === "coin" || this.matrix[r][c] === "player1" || this.matrix[r][c] === "player2" || this.matrix[r][c] === ".") {
                    let nextCol = parseInt(c) + 1
                    let prevCol = parseInt(c) - 1
                    let nextRow = parseInt(r) + 1
                    let prevRow = parseInt(r) - 1
                    console.log(this.matrix[r][c])
                    //Down corners and margin
                    if (!this.matrix[nextRow]) {
                        //Right Down Corner
                        if (this.matrix[r][prevCol] === "wall" && !this.matrix[r][nextCol] && this.matrix[prevRow][c] === "wall") {
                            this.loadBoard()
                            //Left Down corner
                        } else if (!this.matrix[nextRow] && !this.matrix[r][prevCol] && this.matrix[r][nextCol] === "wall" && this.matrix[prevRow][c] === "wall") {
                            this.loadBoard()
                            //Down margin
                        } else if (this.matrix[r][prevCol] === "wall" && this.matrix[r][nextCol] === "wall" && this.matrix[prevRow][c] === "wall") {
                            this.loadBoard()
                        }
                    }

                    // Up corners and margin
                    if (!this.matrix[prevRow]) {
                        // Right Up Corner
                        if (this.matrix[nextRow][c] === "wall" && this.matrix[r][prevCol] === "wall" && !this.matrix[r][nextCol]) {
                            this.loadBoard()
                            //Left Up Corner
                        } else if (this.matrix[nextRow][c] === "wall" && !this.matrix[r][prevCol] && this.matrix[r][nextCol] === "wall") {
                            this.loadBoard()
                            //Up margin
                        } else if (this.matrix[nextRow][c] === "wall" && this.matrix[r][prevCol] === "wall" && this.matrix[r][nextCol] === "wall") {
                            this.loadBoard()
                        }
                    }


                    if (this.matrix[nextRow] && this.matrix[prevRow]) {

                        //Left margin
                        if (this.matrix[nextRow][c] === "wall" && !this.matrix[r][prevCol] && this.matrix[r][nextCol] === "wall" && this.matrix[prevRow][c] === "wall") {
                            this.loadBoard()
                        }

                        //Right margin
                        if (this.matrix[nextRow][c] === "wall" && this.matrix[r][prevCol] === "wall" && !this.matrix[r][nextCol] && this.matrix[prevRow][c] === "wall") {
                            this.loadBoard()
                        }

                        //Middle of board
                        if (this.matrix[nextRow][c] === "wall" && this.matrix[r][prevCol] === "wall" && this.matrix[r][nextCol] === "wall" && this.matrix[prevRow][c] === "wall") {
                            this.loadBoard()
                        }

                    }


                }
            }
        }
        return this.matrix
    }


    _moveDown(currRow, currCol, player) {
        let otherPlayer
        currRow++
        if(player === "player1"){
            otherPlayer = "player2"
        } else if(player === "player2"){
            otherPlayer = "player1"
        }
        if (!this.matrix[currRow]) {
            return
        } else if (this.matrix[currRow][currCol] != "wall" && this.matrix[currRow][currCol] != otherPlayer ) {
            if (this.matrix[currRow][currCol] === "coin") {
                this._score(player)
            }
            let prevRow = currRow - 1
            this.matrix[prevRow][currCol] = "."
            this.matrix[currRow][currCol] = player
            return
        }


    }

    _moveUp(currRow, currCol, player) {
        let otherPlayer
        if(player === "player1"){
             otherPlayer = "player2"
        } else if(player === "player2"){
             otherPlayer = "player1"
        }

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
            return
        }
    }


    _moveRight(currRow, currCol, player) {
        let otherPlayer
        if(player === "player1"){
            otherPlayer = "player2"
        } else if(player === "player2"){
            otherPlayer = "player1"
        }

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
            return
        }
    }

    _moveLeft(currRow, currCol, player) {
        let otherPlayer
        if(player === "player1"){
            otherPlayer = "player2"
        } else if(player === "player2"){
            otherPlayer = "player1"
        }

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
            return
        }

    }



    movePlayer(player, direction) {

        if (player === "player1") {
            let currCol
            let currRow

            for (let row in this.matrix) {
                for (let column in this.matrix[row]) {
                    if (this.matrix[row][column] === "player1") {
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


        } else if (player === "player2") {
            let currCol
            let currRow

            for (let row in this.matrix) {
                for (let column in this.matrix[row]) {
                    if (this.matrix[row][column] === "player2") {
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

    }

    _score(player) {
        let playerNum = player.slice(-1)
        let score = "score" + playerNum
        this[score] += 10
        console.log(this[score])
    }

}


// let goldRush1 = new GoldRush(5, 5)
// goldRush1.loadBoard()
// goldRush1.print()
// goldRush1.movePlayer("player1", "down")
// goldRush1.print()
// goldRush1.movePlayer("player2", "up")
// goldRush1.print()
// goldRush1.movePlayer("player1", "right")
// goldRush1.print()
// goldRush1.movePlayer("player2", "left")
// goldRush1.print()
// goldRush1.movePlayer("player1", "down")
// goldRush1.print()
// console.log(goldRush1.score1)
// console.log(goldRush1.score2)