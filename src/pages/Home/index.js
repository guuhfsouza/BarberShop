import React from  'react'

import Main from '../Main';
import About from '../About'
import Rendered from '../Rendered'
import Contact from '../Contact'
import Modal from '../Modal';
import Footer from '../Footer';

//import Logo from '../../assets/logo.ico'  

import './style.css';
import '../../global.css'

function Home (){
    return(
        <div className="home-container">
            <header>
                {/* <div className="section-img">
                    <img src={Logo} alt='Logo' />
                </div> */}
            </header>
            <div className="home-content">
                <section>
                    <Main/>
                </section>
                <section>
                    <About/>
                    <Rendered/>
                    <Contact/>
                    <Footer/>
                </section>
            </div>
            <Modal/>
        </div>
    )
}

export default Home;