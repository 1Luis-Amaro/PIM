import React, { useState } from 'react'; // Aqui, estou importando o React, que é essencial para criar componentes, e o hook `useState`, que me permite criar e gerenciar estados dentro deste componente funcional.

import './Nav.css'; // Estou importando o arquivo CSS que contém os estilos específicos para este componente de navegação.

import Logo from '../../../src/assets/Logo.jpg'; // Aqui, eu importo a imagem do logo para usá-la dentro da barra de navegação.

export default function Nav() { // Esta é a função principal do componente `Nav`. É um componente funcional e está sendo exportado como padrão, o que significa que eu posso usá-lo em outros arquivos.

  const [isMenuOpen, setIsMenuOpen] = useState(false); // Aqui eu defino o estado `isMenuOpen` para verificar se o menu está aberto ou fechado. Inicialmente, ele está definido como `false` (menu fechado).

  const [activeLink, setActiveLink] = useState('#home'); // Este é outro estado que controla qual link da navegação está ativo. Por padrão, o link ativo é o `#home`.

  const toggleMenu = () => { // Aqui, eu crio uma função chamada `toggleMenu`. 
    setIsMenuOpen(!isMenuOpen); // Ela muda o valor de `isMenuOpen`. Se estiver `false`, vira `true` (menu abre); se estiver `true`, vira `false` (menu fecha).
  };

  const closeMenu = (link) => { // Esta é a função `closeMenu`, que é usada para duas coisas:
    setIsMenuOpen(false); // Primeiro, ela fecha o menu, definindo `isMenuOpen` como `false`.
    setActiveLink(link); // Segundo, ela atualiza o link ativo, ou seja, marca o link clicado como ativo.
  };

  return ( // Aqui começa o retorno JSX, que é o que será renderizado na tela.
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark"> {/* Este é o elemento principal de navegação. Estou usando classes do Bootstrap para estilizar a barra de navegação. */}
      <a 
        className="navbar-brand ms-3 logo" 
        href="#home" 
        onClick={() => closeMenu('#home')} // Ao clicar na logo, chama a função closeMenu e define '#home' como o link ativo.
      >
        <img src={Logo} alt="Logo" /> {/* Adiciono a imagem do logo, que foi importada acima, e o atributo `alt` para acessibilidade. */}
      </a>
      <button
        className="navbar-toggler" // Classe do Bootstrap para estilizar o botão que aparece em telas pequenas.
        type="button" // Define o tipo do botão como "button".
        onClick={toggleMenu} // Adiciono um evento de clique para chamar a função `toggleMenu` e abrir ou fechar o menu.
        aria-controls="navbarNav" // Acessibilidade: indica qual elemento este botão controla.
        aria-expanded={isMenuOpen} // Acessibilidade: define se o menu está expandido ou não, com base no estado `isMenuOpen`.
        aria-label="Alternar navegação" // Acessibilidade: fornece uma descrição para leitores de tela.
      >
        <span className="navbar-toggler-icon"></span> {/* Ícone do botão, padrão do Bootstrap. */}
      </button>
      <div
        className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} // Classe do menu: alterna entre `collapse` e `show` dependendo do estado `isMenuOpen`.
        id="navbarNav" // Identificação do menu, usada para o atributo `aria-controls` do botão acima.
      >
        <ul className="navbar-nav me-auto"> {/* Lista de links da navegação. Uso as classes do Bootstrap para estilização. */}
          <li className="nav-item"> {/* Cada link é um item da lista. */}
            <a
              className={`nav-link ${activeLink === '#home' ? 'active' : ''}`} // Classe dinâmica: se o link ativo for `#home`, adiciono a classe `active` para destacá-lo.
              href="#home" // Este link leva à seção `#home`.
              onClick={() => closeMenu('#home')} // Quando clicado, chama a função `closeMenu` e define `#home` como o link ativo.
            >
              Home {/* Texto do link. */}
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${activeLink === '#sobre' ? 'active' : ''}`} // Mesma lógica do link "Home", mas para a seção `#sobre`.
              href="#sobre"
              onClick={() => closeMenu('#sobre')}
            >
              Sobre
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${activeLink === '#funcionalidades' ? 'active' : ''}`} // Mesma lógica, agora para a seção `#funcionalidades`.
              href="#funcionalidades"
              onClick={() => closeMenu('#funcionalidades')}
            >
              Serviços
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${activeLink === '#contato' ? 'active' : ''}`} // Mesma lógica para o link "Contato".
              href="#contato"
              onClick={() => closeMenu('#contato')}
            >
              Contato
            </a>
          </li>
        </ul>
        <form className="d-flex"> {/* Formulário de pesquisa no final da navegação. */}
          <input
            className="form-control me-2" // Campo de texto para entrada de pesquisa.
            type="search" // Tipo de entrada é "search".
            placeholder="Pesquisar" // Texto de ajuda exibido no campo.
            aria-label="Pesquisar" // Acessibilidade: descrição do campo para leitores de tela.
          />
          <button className="btn btn-outline-success me-3" type="submit"> {/* Botão para enviar a pesquisa. */}
            Pesquisar
          </button>
        </form>
      </div>
    </nav>
  );
}
