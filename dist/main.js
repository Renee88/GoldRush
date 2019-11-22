let renderer = new Renderer()
let goldRush = new GoldRush(10,10)
let board = goldRush.loadBoard()
console.log(board)

$("#start").on("click",function(){
    renderer.renderBoard(board)
    let player1Name = $("#player1-name").val()
    let player2Name = $("#player2-name").val()

    $("#status-bar").empty()
    let player1Score = $(`<div id = player1-score class = players>${player1Name}</div>`)
    let player2Score = $(`<div id = player2-score class = players>${player2Name}</div>`)
    let shuffleButton = $("<div id = shuffle>Shuffle</div>")
    $("#status-bar").append(player1Score)
    $("#status-bar").append(player2Score)
    $("#status-bar").append(shuffleButton)

})