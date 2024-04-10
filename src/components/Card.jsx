import React from "react";
import Icon from "./Icon";

const Card = ({ swapTurn, player, index }) => {

  let icon = <Icon />;
  if(player == 'X') {
    icon = <Icon name={'cross'} />
  }
  else if(player == 'O') {
    icon = <Icon name={'circle'} />
  }
  return (
    <div
      className="border-[1px] border-solid border-black p-8 flex justify-center items-center basis-[30%] w-28 h-28 rounded-[10%] bg-yellow cursor-pointer"
      onClick={() => swapTurn(index)}
    >
      {icon}
    </div>
  );
};

export default Card;
