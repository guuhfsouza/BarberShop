import React from 'react';
import {  FaAngleDown} from 'react-icons/fa'

import '../../global.css'
import './style.css';

function Rendered(){
    return(
        <div className='rendered-container'>
            <section>
                <title>
                    <h1>Serviços</h1>
                </title>
                <ul>
                    <li>Corte - R$ 25,00</li>
                    <li>Barba - R$ 30,00</li>
                    <li>Bigode - R$ 25,00</li>
                </ul>
                <button>Ver Pacotes < FaAngleDown /></button>
            </section>
        </div>
    )
}


export default Rendered;