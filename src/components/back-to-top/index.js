import React, { Component } from 'react'
import './back-to-top.css';

export default class BackToTop extends Component {
 
    componentDidMount(){
    
        window.addEventListener('scroll', function(){   

            const element = document.getElementById('section-home');
            const btn = document.getElementById('back-to-top');;

            if(element.getBoundingClientRect().top < -100 ){
                btn.classList.add('visible');
            }
            else{
                btn.classList.remove('visible');
            }
        });
    }

    render() {
        return (
            <div id="back-to-top">
                <a href="#section-home">
                    <div className="__angle"></div>
                    <div className="__letter">S</div>
                    <div className="__letter">U</div>
                    <div className="__letter">B</div>
                    <div className="__letter">I</div>
                    <div className="__letter">R</div>
                </a>
            </div>
        )
    }
}

