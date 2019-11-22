class Matrix {
    constructor(rows,cols) {
        this.matrix = []
        this.rows = rows
        this.cols = cols
    }

    generateMatrix(){
        let num = 1
        if(this.rows === 0 && this.cols ===0){
            return
        }
        for(let i = 0; i < this.rows ; i++){
            this.matrix.push([])
            for(let j = 0; j < this.cols; j++){
                this.matrix[i].push(num)
                num++
            }
        } 
    }

    print() {
        
        for (let r of this.matrix) {
            let row = ""
            for (let c of r) {
                row += `${c}\t`
            }
            console.log(`${row}`)
        }
        console.log("-----------------")
    }

    findCoordinate(value){
        for(let r = 0; r < this.rows; r++){
            let c = this.matrix[r].indexOf(value)
            if(c != -1){
                return {x: r, y: c}
            }
        }
    }

    get(rowNum, colNum) {
        return this.matrix[rowNum][colNum]
    }

    printRow(rowNum){
        for(let c of this.matrix[rowNum]){
            console.log(c)
        }
    }

    alter(rowNum,colNum,newValue){
        this.matrix[rowNum][colNum] = newValue
    }

}

