import React from 'react';
import Icon from './Icon';

const Card = ({ iconName }) => {
  return (
    <div className='border-[1px] border-solid border-black p-8 flex justify-center items-center basis-[30%] w-28 h-28 rounded-[10%] bg-yellow'>
        <Icon name={iconName} />
    </div>
  )
}

export default Card;