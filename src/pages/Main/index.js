import React from 'react'
import {FaFacebookSquare, FaInstagram} from 'react-icons/fa';


import '../../global.css'
import './style.css';

//import Logo from '../../assets/logo.ico'

function Main(){

    function openModalCustomerRegistration(){
        const modalCustomerRegistration = document.querySelector('div [name=modalCustomerRegistration]');
        console.log(modalCustomerRegistration)
        modalCustomerRegistration.classList.toggle('on')
    }
    

    return(
        <div className="main-container">
            <section>
                {/* <div className="section-img">
                    <img src={Logo} alt='Logo' />
                </div> */}
                <nav>
                    <div>
                        <a>Sobre Nós</a>
                        <a>Serviços</a>
                        <a>Contatos</a>
                    </div>
                    <div>
                        <button onClick={openModalCustomerRegistration}>Cliente</button>
                    </div>
                    
                    {/* <figure>
                        <FaFacebookSquare/>
                        {/* <figcaption>Facebook</figcaption> 
                        <FaInstagram/>
                        {/* <figcaption>Instagram</figcaption> 
                    </figure> */}
                </nav>
            </section>  
        </div>
    )
}

export default Main;