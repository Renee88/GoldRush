let renderer = new Renderer()
let goldRush = new GoldRush(10, 10)
let board = goldRush.loadBoard()
let game = goldRush.matrix
let player1 = "player1"
let player2 = "player2"
let score1 = goldRush.score1
let score2 = goldRush.score2


$("#start").on("click", function () {
    renderer.renderBoard(board)
    let player1Name = $("#player1-name").val()
    let player2Name = $("#player2-name").val()

    $("#status-bar").empty()
    let player1Score = $(`<div id = player1 class = "players titles">${player1Name}:<div id = player1-score class = scores>${score1}</div></div>`)
    let player2Score = $(`<div id = player2 class = "players titles">${player2Name}:<div id = player2-score class = scores>${score2}</div></div>`)
    let shuffleButton = $("<div id = shuffle>Shuffle</div>")
    let coinsNum = $(".coin").length
    let coinsLeft = $(`<div id = coins-left class = titles>Coins left:<div id=number-of-coins class = scores>${coinsNum}</div></div>`)
    $("#status-bar").append(player1Score)
    $("#status-bar").append(player2Score)
    $("#status-bar").append(shuffleButton)
    $("#status-bar").append(coinsLeft)
})

$("#status-bar").on("click", "#shuffle", function () {
    let board = goldRush.loadBoard()
    $("#board").empty()
    renderer.renderBoard(board)

})

$("body").keydown(function (event) {
    console.log(event.which)
    if (event.which === 87) {
        let direction = "up"
        goldRush.movePlayer(player1, direction)
    }

    if (event.which === 83) {
        let direction = "down"
        goldRush.movePlayer(player1, direction)
    }

    if (event.which === 65) {
        let direction = "left"
        goldRush.movePlayer(player1, direction)
    }

    if (event.which === 68) {
        let direction = "right"
        goldRush.movePlayer(player1, direction)
    }

    $("#board").empty()
    renderer.renderBoard(game)
    $("#player1-score").empty()
    $("#player2-score").empty()
    $("#player1-score").append(goldRush.score1)
    $("#player2-score").append(goldRush.score2)
})

$("body").keydown(function (event) {
    if (event.which === 73) {
        let direction = "up"
        goldRush.movePlayer(player2, direction)
    }

    if (event.which === 75) {
        let direction = "down"
        goldRush.movePlayer(player2, direction)
    }

    if (event.which === 74) {
        let direction = "left"
        goldRush.movePlayer(player2, direction)
    }

    if (event.which === 76) {
        let direction = "right"
        goldRush.movePlayer(player2, direction)
    }

    $("#board").empty()
    renderer.renderBoard(game)
    $("#player1-score").empty()
    $("#player2-score").empty()
    $("#player1-score").append(goldRush.score1)
    $("#player2-score").append(goldRush.score2)
    let coinsNum = $(".coin").length
    $("#number-of-coins").empty()
    $("#number-of-coins").append(coinsNum)
})