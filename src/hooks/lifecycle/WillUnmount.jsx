/**
 * Ejemplo de uso del metodo componentWillUnmount para componente de clase
 * Ejemplo de uso del hooks para componente funcional
 * (Cuando el componente va a desaparecer)
 */

import React, { Component, useEffect } from "react";

export class WillUnmount extends Component {
  componentWillUnmount() {
    console.log("Comportamiento antes de que el componente desaparezca");
  }
  render() {
    return <div>componentWillUnmount</div>;
  }
}

export const WillUnmountHook = () => {
  useEffect(() => {
    return () => {
      console.log("Comportamiento antes de que el componente desaparezca");
    };
  }, []);
  return <div></div>;
};
