import React from 'react';
import Card from './Card';

const Grid = ({ numberOfCards}) => {
  return (
    <div>
        <div className='flex w-[31.25rem] h-[31.25rem] justify-between items-center flex-wrap'>
            {Array(numberOfCards).fill(<Card />).map((element, index) => {
                return <Card key={index} />
            })}
        </div>
    </div>
  )
}

export default Grid;