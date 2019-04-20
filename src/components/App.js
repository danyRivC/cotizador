import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
import {obtenerDiferenciaAnio, calcularMarca, obtenerPlan, primeraMayuscula} from "../helper";
import Resumen from './Resumen';

class App extends Component {

  state = {
    resultado : '',
    datos : {}
  };

  cotizarSeguro = (datos) =>{
    const {marca, plan, year} = datos;

    let resultado = 2000;

    const diferencia = obtenerDiferenciaAnio(year);

    resultado -=((diferencia * 3 )* resultado)/100;

    resultado = calcularMarca(marca) * resultado;

    let incrementoPlan = obtenerPlan(plan);
    resultado = parseFloat(incrementoPlan *resultado).toFixed(2);
    const datosAuto ={
        marca : marca,
        year : year,
        plan : plan
    };
    this.setState({
      resultado:resultado,
      datos:datosAuto

    });
    console.log(this.state.datos);
  };
  render() {
    return (
      <div className="contenedor">
        <Header titulo={'Cotizador de seguro de auto'}/>
        <div className="contenedor-formulario">
          <Formulario cotizarSeguro={this.cotizarSeguro}/>
          <Resumen
              datos={this.state.datos}
              resultado={this.state.resultado}
          />



        </div>

      </div>
    );
  }
}

export default App;
