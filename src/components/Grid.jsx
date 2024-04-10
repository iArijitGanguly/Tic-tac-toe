import React, { useState } from 'react';
import Card from './Card';

const Grid = ({ numberOfCards }) => {
    const [turn, setTurn] = useState(true);
    const [board, setBoard] = useState(Array(numberOfCards).fill(''));

    function swapTurn(index) {
      console.log("clicked on index no. ", index);
      if(turn == true) {
        board[index] = 'X';
      }
      else {
        board[index] = 'O';
      }
      setBoard([...board]);
      setTurn(!turn);
    }
  return (
    <div>
        <h1 className='text-yellow'>Current Turn: {(turn) ? 'X' : 'O'} </h1>
        <div className='flex w-[31.25rem] h-[31.25rem] justify-between items-center flex-wrap'>
            {board.map((player, index) => {
                return <Card key={index} player={player} swapTurn={swapTurn} index={index}/>
            })}
        </div>
    </div>
  )
}

export default Grid;