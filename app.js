let cells = document.querySelectorAll(".r1");
let turn = "X";
let gameOver = false;

let wins = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];

cells.forEach(cell => {
  cell.onclick = function () {
    if (cell.innerText != "" || gameOver) return;

    cell.innerText = turn;

    if (checkWin()) {
      alert(turn + " wins");
      gameOver = true;
      return;
    }

    turn = (turn == "X") ? "O" : "X";
  };
});

function checkWin() {
  for (let p of wins) {
    let a = cells[p[0]].innerText;
    let b = cells[p[1]].innerText;
    let c = cells[p[2]].innerText;

    if (a != "" && a == b && b == c) {
      return true;
    }
  }
  return false;
}
