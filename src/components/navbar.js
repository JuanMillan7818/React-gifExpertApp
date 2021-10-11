import React from "react";
import Transition from "../img/transition.png";
import {useAnimationBackground} from '../hooks/useAnimation';

const navbar = () => {
  const handleClickTransition = () => {
    useAnimationBackground();
  };

  return (
    <React.Fragment>
      <nav className="navbar-main">
        <img
          src={Transition}
          alt="Transition"
          id="transition-img"
          onClick={handleClickTransition}
        />
      </nav>
    </React.Fragment>
  );
};

export default navbar;
