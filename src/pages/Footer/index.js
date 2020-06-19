import React from 'react'
import {FaFacebookSquare, FaInstagram} from 'react-icons/fa';


import '../../global.css'
import './style.css';

//import Logo from '../../assets/logo.ico'

function Footer(){
    return(
        <div className="footer-container">
            <section>
                <nav>
                    <div>
                        <p>2020 Copy Right Reserved</p>
                        <p>Site developed by Gustavo Souza</p>
                    </div>
                    <figure>
                        <p> Nossas redes sociais:</p>
                        <FaFacebookSquare size={25}/>
                        <FaInstagram size={25.5}/>
                    </figure>
                </nav>
            </section>
        </div>
    )
}

export default Footer;