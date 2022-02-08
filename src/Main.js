import React, { useState } from 'react';
import players from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandDots, faShield, faToolbox, faFutbol, faPersonRunning } from '@fortawesome/free-solid-svg-icons'


const Main = () => {
  const [index, setIndex] = useState(0);
  const { name, position, nationality, squad_number, image, career} = players[index];

  const setPlayerIcon = (position) => {

    switch (position) {
      case 'goalkeeper':
        return <FontAwesomeIcon icon={faHandDots} />
      case 'defender':
        return <FontAwesomeIcon icon={faShield} />
      case 'midfielder':
        return <FontAwesomeIcon icon={faToolbox} />
      case 'winger':
        return <FontAwesomeIcon icon={faPersonRunning} />
      case 'striker':
        return <FontAwesomeIcon icon={faFutbol} />
      default:
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
