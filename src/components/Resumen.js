import React, {Component} from 'react';
import Resultado from './Resultado';
class  Resumen extends Component{

    mostrarResumen = ()=>{
        const {marca, year, plan} = this.props.datos;
        if(!marca || !year || !plan)return null;
        return(
            <div className='resumen'>
                <h2>Resumen de cotizacion</h2>
                <li>Marca : {marca}</li>
                <li>Plan : {plan}</li>
                <li>Año del auto : {year}</li>
            </div>
        );
    }
    render() {

        return(
            <div>
                {this.mostrarResumen()}
                <Resultado resultado = {this.props.resultado}/>
            </div>


        );
    }

}

export default Resumen;