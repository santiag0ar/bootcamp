/**
 * Ejemplo de uso de:
 * useState()
 * useRef()
 * useEffect()
 */
import React, { useState, useEffect, useRef } from "react";

const Ejemplo2 = () => {
  // Vamos a crear dos contadores
  // cada uno en un estado diferente
  const [contador1, setContador1] = useState(0);
  const [contador2, setContador2] = useState(0);

  // Vamos a crear una referencia con useRef() para asociar una variable
  // con un elemento del DOM del componente (vista HTML)
  const miRef = useRef();

  function incrementar1() {
    setContador1(contador1 + 1);
  }

  function incrementar2() {
    setContador2(contador2 + 1);
  }
  /* Trabajando con useEffect() solo se puede usar 1 */
  /**
   * ? Caso 1: Ejecutar SIEMPRE un snippet de codigo
   * Cada vez que haya un cambio en el estado del componente
   * se ejecuta aquello que este dentro del useEffect()
   *   useEffect(() => {
    console.log("CAMBIO EN EL ESTADO DEL COMPONENTE");
    console.log("Mostrando referencia a elemento del DOM");
    console.log(miRef);
  });
   */

  /**
   * ? Caso 2: Ejecutar SOLO cuando cambie contador1
   * Cada vez que haya un cambio en contador1, se ejecuta lo que diga el useEffect()
   * En caso de que cambie contador2 no habra ejecucion


  useEffect(() => {
    console.log("CAMBIO EN EL ESTADO DEL CONTADOR 1");
    console.log("Mostrando referencia a elemento del DOM");
    console.log(miRef);
  }, [contador1]);

   */

  /**
   * ? Caso 3: Ejecutar SOLO cuando cambie contador1 o contador2
   * Cada vez que haya un cambio en contador1, se ejecuta lo que diga el useEffect()
   *  Cada vez que haya un cambio en contador2, se ejecuta lo que diga el useEffect()
   */

  useEffect(() => {
    console.log("CAMBIO EN EL ESTADO DEL CONTADOR 1 / CONTADOR 2");
    console.log("Mostrando referencia a elemento del DOM");
    console.log(miRef);
  }, [contador1, contador2]);

  return (
    <div>
      <h1>Ejemplo de useState(), useRef() y useEffect() </h1>
      <h2>Contador 1: {contador1}</h2>
      <h2>Contador 2: {contador2}</h2>
      {/* Elemento referenciado */}
      <h4 ref={miRef}>Ejemplo de elemento referenciado</h4>
      {/* Botones para cambiar los contadores */}
      <div>
        <button onClick={incrementar1}>Incrementar 1</button>
        <button onClick={incrementar2}>Incrementar 2</button>
      </div>

      {/* <h2>Datos de la persona:</h2>
      <h3>Nombre: {persona.name}</h3>
      <h3>Email: {persona.email}</h3> */}
    </div>
  );
};

export default Ejemplo2;
