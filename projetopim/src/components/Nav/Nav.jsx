import React from 'react';
import './Nav.css';  // Assumindo que o CSS esteja em um arquivo separado chamado 'Nav.css'

export default function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand ms-3" href="#">MinhaMarca</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Alternar navegação">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#home">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#sobre">Sobre</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#funcionalidades">Serviços</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contato">Contato</a>
                    </li>
                </ul>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Pesquisar" aria-label="Pesquisar" />
                    <button className="btn btn-outline-success me-3" type="submit">Pesquisar</button>
                </form>
            </div>
        </nav>
    );
}
