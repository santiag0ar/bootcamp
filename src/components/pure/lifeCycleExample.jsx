/**
 * Ejemplo de componente de tipo clase que dispone de los
 * metodos de ciclo de vida.
 */

import React, { Component } from "react";
class LifeCycleExample extends Component {
  constructor(props) {
    super(props);
    console.log("constructor(props): Cuando se intancia el componente");
  }
  componentWillMount() {
    console.log("componentWillMount(): Antes del montaje del componente");
  }

  componentDidMount() {
    console.log(
      "componentDidMount(): Justo al del montaje del componente, antes de renderizarlo"
    );
  }

  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps(): Si va a recibir nuevas props");
  }

  shouldComponentUpdate(nextProps, nextState) {
    /**
     * Controlar si el componente debe o no actualizarse
     */
    // return true/false
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate():Justo antes de actualizarse");
  }

  componentDillUpdate(nextProps, nextState) {
    console.log("componentDillUpdate():Justo despues de actualizarse");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount(): Justo antes de desaparecer");
  }

  render() {
    return <div></div>;
  }
}

export default LifeCycleExample;
