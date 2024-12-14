import React from 'react';
import Header from './components/Header/Header';
// import Hero from './components/Hero/Hero';
import Hero from './components/Header/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Testimonials from './components/Testimonials/Testimonials';
import Highlight from './components/Highlight/Highlight';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
    return (
        <div className="app">
            <Header />
            <Hero />
           <About />
           <Services />
           <Skills />
           <Projects />
           <Testimonials />
           <Highlight />
           <Contact />
           <Footer />
           
        </div>
    );
}

export default App;