import React from  'react'

import Main from '../Main';
import About from '../About'
import Rendered from '../Rendered'
import Contact from '../Contact'
import Modal from '../Modal';
import Footer from '../Footer';

//import Logo from '../../assets/logo.ico'  

import smoothingScrollTo from'../../scripts/Animations/smoothingScrollTo';
import appearButtonScrollTop from'../../scripts/Animations/appearButtonScrollTop';

import './style.css';
import '../../global.css'

function Home (){
    window.addEventListener('scroll', appearButtonScrollTop);

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
            <div className='button-top-return' name='button-scrollTop'>
                <button onClick={() => {
                    smoothingScrollTo(0, document.documentElement.offsetTop, 1000)
                }}> ^ </button>  
            </div>
        </div>
    )
}

export default Home;