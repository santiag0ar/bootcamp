/*
Ejemplo del uso del Hook useState

Crear un componente de tipo  funcion y acceder a su estado
privado a traves de un hook y, ademas, poder modificarlo
*/

import React, { useState } from "react";

const Ejemplo1 = () => {
  // Valor iniciar para un contador
  const valorInicial = 0;
  // Valor inicial para una persona

  const personaInicial = {
    name: "Santiago",
    email: "santiago@gmail.com",
  };

  /*
  Queremos que el valorInicial y personaInicial sean parte del estado
  del componente para asi poder gestionar su cambio y que este se vea
  reflejado en la vista del componente.
  
  const [nombreVariable, funcionParaCambiar] = useState(valorInicial);
  
  */

  const [contador, setContador] = useState(valorInicial);
  const [persona, setPersona] = useState(personaInicial);

  /**
   * Funcion para actualizar el estado privado que contiene el contador
   */

  function incrementarContador() {
    // ? funcionParaCambiar(nuevoValor)
    setContador(contador + 1);
  }
  /**
   * Funcion para actualizar el estado de persona en el componente
   */
  function actualizarPersona() {
    setPersona({
      name: "Pepe",
      email: "pepe@gg.com",
    });
  }

  return (
    <div>
      <h1>Ejemplo de useState()</h1>
      <h2>Contador: {contador}</h2>
      <h2>Datos de la persona:</h2>
      <h3>Nombre: {persona.name}</h3>
      <h3>Email: {persona.email}</h3>
      {/* Bloque de botones para actualizar el estado del componente */}
      <button onClick={incrementarContador}>Incrementar Contador</button>
      <button onClick={actualizarPersona}>Actualizar Persona</button>
    </div>
  );
};

export default Ejemplo1;
