import React, { useState } from "react";
import Card from "./Card";

const Grid = ({ numberOfCards }) => {
  const [turn, setTurn] = useState(true);
  const [board, setBoard] = useState(Array(numberOfCards).fill(""));
  const [winner, setWinner] = useState(null);
  const [tied, setTied] = useState(false);

  function swapTurn(index) {
    if (turn == true) {
      board[index] = "X";
    } else {
      board[index] = "O";
    }
    const win = isWinner();
    if (win) {
      setWinner(win);
    }
    checkTied();
    setBoard([...board]);
    setTurn(!turn);
  }

  function isWinner() {
    if (
      (board[0] != "" || board[1] != "" || board[2] != "") &&
      board[0] == board[1] &&
      board[1] == board[2]
    ) {
      return board[0];
    }
    if (
      (board[3] != "" || board[4] != "" || board[5] != "") &&
      board[3] == board[4] &&
      board[4] == board[5]
    ) {
      return board[3];
    }
    if (
      (board[6] != "" || board[7] != "" || board[8] != "") &&
      board[6] == board[7] &&
      board[7] == board[8]
    ) {
      return board[6];
    }

    if (
      (board[0] != "" || board[3] != "" || board[6] != "") &&
      board[0] == board[3] &&
      board[3] == board[6]
    ) {
      return board[0];
    }
    if (
      (board[1] != "" || board[4] != "" || board[7] != "") &&
      board[1] == board[4] &&
      board[4] == board[7]
    ) {
      return board[1];
    }
    if (
      (board[2] != "" || board[5] != "" || board[8] != "") &&
      board[2] == board[5] &&
      board[5] == board[8]
    ) {
      return board[2];
    }

    if (
      (board[0] != "" || board[4] != "" || board[8] != "") &&
      board[0] == board[4] &&
      board[4] == board[8]
    ) {
      return board[0];
    }
    if (
      (board[2] != "" || board[4] != "" || board[6] != "") &&
      board[2] == board[4] &&
      board[4] == board[6]
    ) {
      return board[2];
    }

    return "";
  }

  function checkTied() {
    let fillCount = 0;
    board.forEach((box) => {
      if (box != "") {
        fillCount++;
      }
    });

    if (fillCount == 9) {
      setTied(true);
    }
  }

  function resetGame() {
    setBoard(Array(numberOfCards).fill(""));
    setTurn(true);
    setWinner(null);
    setTied(false);
  }
  return (
    <div className="max-w-md">
      {tied && (
        <>
          <h1 className="text-yellow">Game is Tied now !!!!</h1>
          <button
            className="w-full bg-green-600 text-white p-2 rounded-lg"
            onClick={resetGame}
          >
            Reset Game
          </button>
        </>
      )}
      {winner && (
        <>
          <h1 className="text-yellow">Winner is : {winner}</h1>
          <button
            className="w-full bg-green-600 text-white p-2 rounded-lg"
            onClick={resetGame}
          >
            Reset Game
          </button>
        </>
      )}
      {!winner && !tied && (
        <h1 className="text-yellow">Current Turn: {turn ? "X" : "O"} </h1>
      )}
      <div className="flex w-[31.25rem] h-[31.25rem] justify-between items-center flex-wrap">
        {board.map((player, index) => {
          return (
            <Card
              key={index}
              gameEnd={winner ? true : false}
              tied={tied}
              player={player}
              swapTurn={swapTurn}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Grid;