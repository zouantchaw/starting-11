import React, { useState } from 'react';
import players from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Main = () => {
  const [index, setIndex] = useState(10);
  const { name, position, nationality, squad_number, image, career} = players[index];


  return (
    <article className='review'>
      <div className="img-container">
        <img src={image} alt={name} className='person-img' />
      </div>
    </article>
  )
};

export default Main;
