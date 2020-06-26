import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home';
// import Main from './pages/Main';
// import About from './pages/About';
// import Rendered from './pages/Rendered';
// import Contact from './pages/Contact';
// import Modal from './pages/Modal';
// import Footer from './pages/Footer';
import ClientArea from './pages/ClientArea';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>    
                <Route path="/" exact component={Home} />
                <Route path="/client-area" exact component={ClientArea} />
                {/* <Route path="/modal" exact component={Modal} />
                <Route path="/footer" exact component={Footer} />
                <Route path="/main" exact component={Main} />
                <Route path="/about" exact component={About} />
                <Route path="/service" exact component={Rendered} />
                <Route path="/contact" exact component={Contact} /> */}
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;