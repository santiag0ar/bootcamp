/**
 * Ejemplo de uso del ciclo de vida del método
 * de ciclo de vida en componente clase y el hook de ciclo de vida
 * en componente funcional
 */
import React, { Component, useEffect } from "react";
import { DidMount } from "./DidMount";
import { DidMount } from "./DidMount";

export class DidMount extends Component {
  componentDidMount() {
    console.log(
      "Comportamiento antes de que el componente sea añadido al DOM (renderice)"
    );
  }

  render() {
    return <div>DidMountClase</div>;
  }
}

export const DidMountHook = () => {
  useEffect(() => {
    console.log(
      "Comportamiento antes de que el componente sea añadido al DOM (renderice)"
    );
  }, []);
  return (
    <div>
      <h1>DidMountHook</h1>
    </div>
  );
};
