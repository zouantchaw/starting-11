import React, { useState } from 'react';
import players from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandDots, faShield, faToolbox, faFutbol, faPersonRunning } from '@fortawesome/free-solid-svg-icons'


const Main = () => {
  const [index, setIndex] = useState(0);
  const { name, position, nationality, squad_number, image, career} = players[index];

  const setPlayerIcon = (position) => {
    console.log("Inside playerIcon function")
    console.log(position)
    if (position === 'goalkeeper') {
      return <FontAwesomeIcon icon={faHandDots} />
    }
    if (position === 'defender') {
      return <FontAwesomeIcon icon={faShield} />
    }
    if (position === 'midfielder') {
      return <FontAwesomeIcon icon={faToolbox} />
    }
    if (position === 'winger') {
      return <FontAwesomeIcon icon={faPersonRunning} />
    }
    if (position === 'striker') {
      return <FontAwesomeIcon icon={faFutbol} />
    }
  }


  return (
    <article className='review'>
      <div className="img-container">
        <img src={image} alt={name} className='person-img' />
        <span className="quote-icon">
          {setPlayerIcon(position)}
        </span>
      </div>
    </article>
  )
};

export default Main;
