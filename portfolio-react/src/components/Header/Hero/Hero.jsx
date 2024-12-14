import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="name-container">
                <span className="word-left">Rand</span>
                <span className="word-right">Dabbour</span>
            </div>
            <div className="name-container2">
                <span className="word-left">Web</span>
                <span className="word-right">Developer</span>
            </div>
            <button className="hero-button">Get Contact!</button>
        </section>
    );
};

export default Hero;