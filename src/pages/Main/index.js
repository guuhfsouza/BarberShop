import React from 'react'

import '../../global.css'
import './style.css';

// import scripts
import openModalCustomerRegistration from '../../scripts/Animations/openModalCustomerRegistration'
import smoothingScrollTo from '../../scripts/Animations/smoothingScrollTo';

function Main(){


    function scroolTo(selectedSection = 'pageTop'){
        if(selectedSection === 'about'){
            const about = document.getElementsByClassName("about-container");
            smoothingScrollTo(0, about[0].offsetTop, 1000)
        }
        else if(selectedSection === 'service'){
            const service = document.getElementsByClassName("rendered-container");
            smoothingScrollTo(0, service[0].offsetTop, 1000)
        }
        else if(selectedSection === 'contact'){
            const contact = document.getElementsByClassName("contact-container");
            smoothingScrollTo(0, contact[0].offsetTop, 1000)
        }
        else{
            const myPageTop = document.documentElement.offsetTop;
            smoothingScrollTo(0, myPageTop, 1000)
        }
    }

    return(
        <div className="main-container" name='main'>
            <section>
                {/* <div className="section-img">
                    <img src={Logo} alt='Logo' />
                </div> */}
                <nav>
                    <div>
                        <a onClick={e => scroolTo()}>Home</a>
                        <a onClick={e => scroolTo('about')}>Sobre Nós</a>
                        <a onClick={e => scroolTo('service')}>Serviços</a>
                        <a onClick={e => scroolTo('contact')}>Contatos</a>
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