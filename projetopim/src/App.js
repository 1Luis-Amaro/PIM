import React, { useState, useEffect } from 'react'; 
import './App.css'; // Importando o arquivo CSS principal do App
import Nav from './components/Nav/Nav'; 
import 'bootstrap/dist/css/bootstrap.min.css'; // Certifique-se de importar o CSS do Bootstrap
import LandingPage from './components/LandingPage/LandingPage'; 
import Footer from './components/Footer/Footer';

function App() {
  const handleScroll = () => {
    // Seleciona todos os elementos que têm a classe "scroll-effect"
    const elements = document.querySelectorAll('.scroll-effect');

    elements.forEach((element) => {
      // O método getBoundingClientRect retorna um objeto com as coordenadas do elemento em relação à janela de visualização
      const position = element.getBoundingClientRect();
      
      // Aqui estamos verificando se o elemento está completamente dentro da área visível da janela (viewport)
      if (position.top >= 0 && position.bottom <= window.innerHeight) {
        // Se o elemento está visível, adiciona a classe 'visible'
        element.classList.add('visible');
      } else {
        // Se o elemento não está visível, remove a classe 'visible'
        element.classList.remove('visible');
      }
    });
  };

  useEffect(() => {
    // O método addEventListener adiciona um evento ao objeto `window`. Aqui, estamos escutando o evento 'scroll'.
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
