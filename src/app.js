import React from 'react';
import Home from './home/home';
import Header from './header/header';
import Footer from './footer/footer';


export default class App extends React.Component {

    render(){

        return(
            <div>
                <Header />
                <Home />
                <Footer />

            </div>

        )
        
    }

}

//ES6