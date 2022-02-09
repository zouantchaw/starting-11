import React, { useState } from "react";
import players from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandDots,
  faShield,
  faToolbox,
  faFutbol,
  faPersonRunning,
} from "@fortawesome/free-solid-svg-icons";

const Main = () => {
  const [index, setIndex] = useState(0);
  const { name, position, nationality, squad_number, image, career } =
    players[index];

  const setPlayerIcon = (position) => {
    switch (position) {
      case "goalkeeper":
        return <FontAwesomeIcon icon={faHandDots} />;
      case "defender":
        return <FontAwesomeIcon icon={faShield} />;
      case "midfielder":
        return <FontAwesomeIcon icon={faToolbox} />;
      case "winger":
        return <FontAwesomeIcon icon={faPersonRunning} />;
      case "striker":
        return <FontAwesomeIcon icon={faFutbol} />;
      default:
        return <FontAwesomeIcon icon={faFutbol} />;
    }
  };

  const checkNumber = (number) => {
    if (number > players.length - 1) {
      return 0
    }
    if (number < 0) {
      return players.length - 1;
    }
    return number;
  }

  const nextPlayer = () => {
    setIndex((index) => {
      let newIndex = index + 1
      return checkNumber(newIndex);
    })
  }

  const prevPlayer = () => {
    // if index equals the 
    setIndex((index) => {
      let newIndex = index - 1
      return checkNumber(newIndex)
    })
  }

  const randomPlayer = () => {
    let randomNumber = Math.floor(Math.random() * players.length)
    if (randomNumber === index) {
      randomNumber = index + 1
    }
    setIndex(checkNumber(randomNumber))
  }

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">{setPlayerIcon(position)}</span>
      </div>
      <h4 className="name">
        {squad_number} {name}
        {nationality}
        {console.log(index)}
        {console.log(players.length)}
      </h4>
      <h4 className="position">{position}</h4>
      <p className="career">{career}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPlayer}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPlayer}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPlayer}>random</button>
    </article>
  );
};

export default Main;
