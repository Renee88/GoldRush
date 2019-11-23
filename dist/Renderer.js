class Renderer{
    renderBoard(board){
        let source = $("#board-template").html()
        Handlebars.registerHelper('ifCond', function(v1, v2, options) { if(v1 === v2) { return options.fn(this); } return options.inverse(this); });
        let boardTemplate = Handlebars.compile(source)
        let boardHTML = boardTemplate({ board })
        $("#board").append(boardHTML)
    }

    renderMatrixSize(size){
        let source = $("#matrix-size-template").html()
        let matrixSizeTemplate = Handlebars.compile(source)
        let matrixSizeHTML = matrixSizeTemplate({ size })
        $("#status-bar").append(matrixSizeHTML)
    }
}