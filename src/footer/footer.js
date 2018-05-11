import React from 'react';

export default class Footer extends React.Component{
    render(){

        return(
            <footer className="fixed-footer">
                <nav>
                        <a href="https://www.cdkglobal.com/">CDK Global</a>
                        <a href="https://www.quora.com/profile/Being-Ashif">Find me on Quora</a>
                        <a href="https://api.instagram.com/v1/media/search?lat=48.858844&lng=2.294351&access_token=ACCESS-TOKE">Find me on Instagram</a>
                </nav>
                
            </footer>
        )
    }
}