import React from 'react'

import '../../global.css'
import './style.css'


function Contact(){
    return(
        <div className='contact-container'>
            <section>
                <title>
                    <h1>Contatos</h1>
                </title>
                <fieldset className="contact-contacts">
                    <div>
                        <strong>Cel:</strong>
                        <p>18 99745-6445</p>
                    </div>
                    <div>
                        <strong>Rua:</strong>
                        <p>Manoel Bernardo da Silva, 32 - Vila Operária</p>
                    </div>
                    <div>
                        <strong>Email:</strong>
                        <p>gustavof_souza@outlook.com</p>
                    </div>
                </fieldset>
                <div className='contact-hours-weeking'>
                    <div className='contact-hours'>
                        <h3>TER</h3>
                        <p>8:00 - 20:00</p>
                    </div>
                    <div className='contact-hours'>
                        <h3>QUA</h3>
                        <p>8:00 - 20:00</p>
                    </div><div className='contact-hours'>
                        <h3>QUI</h3>
                        <p>8:00 - 20:00</p>
                    </div><div className='contact-hours'>
                        <h3>SEX</h3>
                        <p>8:00 - 20:00</p>
                    </div><div className='contact-hours'>
                        <h3>SAB</h3>
                        <p>8:00 - 20:00</p>
                    </div>
                    <div className='contact-hours'>
                        <h3>DOM</h3>
                        <p>8:00 - 20:00</p>
                    </div>
                </div>
            </section>         
        </div>
    );
}

export default Contact;