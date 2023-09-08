/**
 * Ejemplo de uso de método componentDidUpdate en componente de clase
 * y uso de Hook en componente funcional
 */

import React, { Component, useEffect } from "react";
import { DidUpdate } from "./DidUpdate";
import { DidUpdate } from "./DidUpdate";

export class DidUpdate extends Component {
  componentDidUpdate() {
    console.log(
      "Comportamiento cuando el componente recibe nuevos props o cambio en su estado privado"
    );
  }
  render() {
    return (
      <div>
        <h1>DidUpdateClase</h1>
      </div>
    );
  }
}

export const DidUpdateHook = () => {
  useEffect(() => {
    console.log(
      "Comportamiento cuando el componente recibe nuevos props o cambio en su estado privado"
    );
  });
  return (
    <div>
      <h1>DidUpdateHook</h1>
    </div>
  );
};
