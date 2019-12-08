class Renderer {
    renderBoard(board) {
        let source = $("#board-template").html()
        Handlebars.registerHelper('ifCond', function (v1, v2, options) { if (v1 === v2) { return options.fn(this); } return options.inverse(this); });
        let boardTemplate = Handlebars.compile(source)
        let boardHTML = boardTemplate({ board })
        $("#board").append(boardHTML)
    }

    renderMatrixSize(size) {
        let source = $("#matrix-size-template").html()
        let matrixSizeTemplate = Handlebars.compile(source)
        let matrixSizeHTML = matrixSizeTemplate({ size })
        $("#status-bar").append(matrixSizeHTML)
    }

    renderStatusBar(goldRush) {
        $("#player1-score").empty()
        $("#player2-score").empty()
        $("#player1-score").append(goldRush.score1)
        $("#player2-score").append(goldRush.score2)
        let coinsNum = $(".coin").length
        $("#number-of-coins").empty()
        $("#number-of-coins").append(coinsNum)
    }

    renderWin(player) {
        $("#board").empty()
        $("#board").append(`<div id="congratulations"><div id = "first-line">Congrtulations, ${player}!</div> <div id = "second-line"> you have won!</div> <div id = "start-again">Start again</div> </div>`)
    }


}