var tictactoe = function() {

  let stdin = process.openStdin();
  let firstPlayer = true
  let player = firstPlayer? 'One' : 'Two'
  let bDisplay

  let b = [['  ', '  ', '  '], ['  ', '  ', '  '], ['  ', '  ', '  ']]

  let updateDisplay = function() {
    bDisplay = `${b['0']['0']}|${b['0']['1']}|${b['0']['2']}\n---------\n${b['1']['0']}|${b['1']['1']}|${b['1']['2']}\n---------\n${b['2']['0']}|${b['2']['1']}|${b['2']['2']}`
  }

  let place = function(x, y, cb) {
    if (b[x][y] === '  ') {
      let XorO = firstPlayer? 'X' : 'O'
      b[x][y] = XorO
      cb()
    } else {
      console.log('square taken try again')
    }
  }

  let isWinner = function() {
    for (var i = 0; i < 3; i++) {

        if(b[i][0].toString() == 'X' && b[i][1].toString() == 'X' && b[i][2].toString() == 'X') {
            console.log('Player One Wins')
        }
        if(b[i][0].toString() == 'O' && b[i][1].toString() == 'O' && b[i][2].toString() == 'O') {
            console.log('Player Two Wins')
        }
        if(b[0][i].toString() == 'X' && b[1][i].toString() == 'X' && b[2][i].toString() == 'X') {
            console.log('Player One Wins')
        }
        if(b[0][i].toString() == 'O' && b[1][i].toString() == 'O' && b[2][i].toString() == 'O') {
            console.log('Player Two Wins')
        }
      }
      if(b[0][0].toString() == 'X' && b[1][1].toString() == 'X' && b[2][2].toString() == 'X') {
          console.log('Player One Wins')
      }
      if(b[0][0].toString() == 'O' && b[1][1].toString() == 'O' && b[2][2].toString() == 'O') {
          console.log('Player Two Wins')
      }
      if(b[0][2].toString() == 'X' && b[1][1].toString() == 'X' && b[2][0].toString() == 'X') {
          console.log('Player One Wins')
      }
      if(b[0][2].toString() == 'O' && b[1][1].toString() == 'O' && b[2][0].toString() == 'O') {
          console.log('Player Two Wins')
      }
  }

  // data listneer
  updateDisplay()
  console.log(bDisplay)
  console.log(`Player\'s ${player} turn`)

  stdin.addListener("data", function(d) {
    let coords = d.toString().trim().split('')
    console.log(coords)

    place(coords[0], coords[1], ()=>{
      updateDisplay()
      isWinner()
      console.log(bDisplay)
      firstPlayer? firstPlayer = false : firstPlayer = true
      player = firstPlayer? 'One' : 'Two'
      console.log(`Player\'s ${player} turn`)
    })
  });
}
console.log('To play enter coords 00 for the top left corner 22 for the bottom right')
tictactoe()
