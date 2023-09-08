import React, { useState } from "react";
import PropTypes from "prop-types";
import lain from "../img/lain.png";

const GreetingF = (props) => {
  const [age, setAge] = useState(29);

  const birthday = () => {
    setAge(age + 1);
  };
  return (
    <div>
      <div>
        <img type="png" src={lain} alt="" height={190} />

        <h1>Hola {props.name} desde componenete funcional.</h1>

        <h2>Tu edad es de: {age}</h2>
        <div>
          <button onClick={birthday}>Cumplir años</button>
        </div>
      </div>
    </div>
  );
};

GreetingF.propTypes = {
  name: PropTypes.string,
};

export default GreetingF;
