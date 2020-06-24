import React from 'react'

import '../../global.css'
import './style.css';

// import scripts
import openModalCustomerRegistration from '../../scripts/Animations/openModalCustomerRegistration'
import scrollTo from '../../scripts/Animations/scrollTo';

function Main(){
    return(
        <div className="main-container" name='main'>
            <section>
                {/* <div className="section-img">
                    <img src={Logo} alt='Logo' />
                </div> */}
                <nav>
                    <div>
                        <a onClick={e => scrollTo()}>Home</a>
                        <a onClick={e => scrollTo('about')}>Sobre Nós</a>
                        <a onClick={e => scrollTo('service')}>Serviços</a>
                        <a onClick={e => scrollTo('contact')}>Contatos</a>
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