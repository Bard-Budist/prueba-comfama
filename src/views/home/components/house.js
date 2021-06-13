import React, {  } from 'react';
import '../home.sass';

const House = (props) => {
  const {
    houseImg,
    click,
    number
  } = props;

  return (
    <div className="house-item" onClick={()=>click(number)}>
      <img src={houseImg} alt={houseImg}></img>
    </div>
  );

}


export default House;