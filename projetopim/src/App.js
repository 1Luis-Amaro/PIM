import React, { useState, useEffect } from 'react';
import './App.css'; // Importando o arquivo CSS principal do App
import ImagemFundo from './components/Imagem/ImagemFundo'; // Importando o componente ImagemFundo
import Nav from './components/Nav/Nav';
import 'bootstrap/dist/css/bootstrap.min.css'; // Certifique-se de importar o CSS do Bootstrap
import Card from './components/Card/Card';
import LandingPage from './components/LandingPage/LandingPage';
import Footer from './components/Footer/Footer';

function App() {
  const handleScroll = () => {
    const elements = document.querySelectorAll('.scroll-effect');

    elements.forEach((element) => {
      const position = element.getBoundingClientRect();
      
      // Verifica se o elemento está visível na tela
      if (position.top >= 0 && position.bottom <= window.innerHeight) {
        element.classList.add('visible');
      } else {
        element.classList.remove('visible');
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup do event listener quando o componente for desmontado
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      {/* Contêiner para aplicar o scroll effect */}
      <div className="scroll-container">
        <Nav />
        <LandingPage />
        <Footer />
      </div>
    </div>
  );
}

export default App;
