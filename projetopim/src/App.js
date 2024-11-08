import React from 'react';
import './App.css'; // Importando o arquivo CSS principal do App
import ImagemFundo from './components/Imagem/ImagemFundo'; // Importando o componente ImagemFundo
import Nav from './components/Nav/Nav';
import 'bootstrap/dist/css/bootstrap.min.css'; // Certifique-se de importar o CSS do Bootstrap
import Card from './components/Card/Card';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Card/>

    </div>
  );
}

export default App;