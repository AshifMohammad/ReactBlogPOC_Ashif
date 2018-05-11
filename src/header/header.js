import React from 'react';

export default class Header extends React.Component{

        render(){

            return(
                <header className="fixed-header">
                    <nav>
                            <a href="">Home</a>
                            <a href="/">About</a>
                            <a href="/">Contact</a>
                            <a href="/">Product</a>
                            <a href="/">Contact Us</a>
                    </nav>                  
                </header>
            )
        }
}