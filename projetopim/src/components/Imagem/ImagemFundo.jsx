import React from 'react';

import imagem from '../../assets/imagem.jpg';


import './ImagemFundo.css';  // Importando o arquivo CSS

export default props => {
  return (
    <div>
         <img src={imagem} className='imagem-fundo'/>
    </div>
     
  );
};