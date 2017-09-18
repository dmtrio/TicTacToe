var tictactoe = function() {

    let stdin = process.openStdin();
    let firstPlayer = true

    let board = {
      'a': {1: null, 2: null, 3:null},
      'b': {1: null, 2: null, 3:null},
      'c': {1: null, 2: null, 3:null}
    }

    let place = function(x, y) {
      let XorO = firstPlayer? 'X' : 'O'
      board[x][y] = XorO
    }

//     let text = prompt('hey')
//     console.log('u said', test)
// console.log(board)


  // data listneer
  console.log(board)
  stdin.addListener("data", function(d) {

    place('a',1)

    console.log(board)
    // note:  d is an object, and when converted to a string it will
    // end with a linefeed.  so we (rather crudely) account for that
    // with toString() and then trim()
    console.log("you entered: [" + d.toString().trim() + "]");
    firstPlayer? firstPlayer = false : firstPlayer = true 

    });


}

tictactoe()
