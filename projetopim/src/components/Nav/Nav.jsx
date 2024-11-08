import React from 'react';

export default function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">  {/* navbar: Define uma barra de navegação. navbar-expand-lg: Expande a navbar em telas grandes (lg). navbar-light: Aplica um estilo de texto escuro em um fundo claro. bg-light: Define a cor de fundo clara. */}
          <a className="navbar-brand ms-3" href="#">MinhaMarca</a>  {/* navbar-brand: Estilo para o logo/marca da navbar */}
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Alternar navegação">
            <span className="navbar-toggler-icon"></span>  {/* navbar-toggler-icon: Ícone de hambúrguer que aparece em telas pequenas para colapsar a navbar */}
          </button>
    
          <div className="collapse navbar-collapse" id="navbarNav">  {/* collapse navbar-collapse: Faz com que o conteúdo colapse em telas menores. id navbarNav: Linka com o data-bs-target do botão para controlar a expansão */}
            
            <ul className="navbar-nav me-auto">  {/* navbar-nav: Agrupa os links de navegação. me-auto: Usa margem automática para empurrar os itens para a esquerda em telas maiores */}
              <li className="nav-item">  {/* nav-item: Define um item individual na navbar */}
                <a className="nav-link active" aria-current="page" href="#">Home</a>  {/* nav-link: Aplica estilo aos links. active: Destaca o link ativo (página atual). aria-current: Informa que este é o link da página atual para acessibilidade */}
              </li>
              
              <li className="nav-item">
                <a className="nav-link" href="#">Sobre</a>  {/* nav-link: Aplica estilo ao link "Sobre" */}
              </li>
              
              <li className="nav-item">
                <a className="nav-link" href="#">Serviços</a>  {/* nav-link: Aplica estilo ao link "Serviços" */}
              </li>
              
              <li className="nav-item">
                <a className="nav-link" href="#">Contato</a>  {/* nav-link: Aplica estilo ao link "Contato" */}
              </li>
              
              <li className="nav-item dropdown">  {/* nav-item dropdown: Define um item que contém um menu suspenso (dropdown) */}
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Mais  {/* dropdown-toggle: Adiciona um ícone para indicar que o item contém um dropdown */}
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">  {/* dropdown-menu: Define o conteúdo do menu suspenso (dropdown) */}
                  <li><a className="dropdown-item" href="#">Ação</a></li>  {/* dropdown-item: Estilo para cada item dentro do dropdown */}
                  <li><a className="dropdown-item" href="#">Outra ação</a></li>
                  <li><hr className="dropdown-divider" /></li>  {/* dropdown-divider: Adiciona uma linha divisória no dropdown */}
                  <li><a className="dropdown-item" href="#">Algo mais aqui</a></li>
                </ul>
              </li>
            </ul>
    
            <form className="d-flex">  {/* d-flex: Define o formulário como flexbox para ajustar os elementos (input e botão) em linha */}
              <input className="form-control me-2" type="search" placeholder="Pesquisar" aria-label="Pesquisar" />  {/* form-control: Estiliza o campo de input. me-2: Margem direita para espaçar do botão */}
              <button className="btn btn-outline-success me-3" type="submit">Pesquisar</button>  {/* btn btn-outline-success: Define um botão com borda verde e estilo de sucesso */}
            </form>
          </div>
        </nav>
      );
    }