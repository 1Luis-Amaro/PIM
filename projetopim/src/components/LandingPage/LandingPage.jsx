import React, { useState, useEffect } from 'react';
import './LandingPage.css';


export default function LandingPage() {
 

  return (
    <div id="home" className="landing-page">

      {/* Hero Section */}
      <header  className="primeira-section">
        <h1 className="scroll-effect">Impulsione sua Gestão com Nosso Software</h1>
        <p className="scroll-effect">Otimize processos, reduza custos e melhore a tomada de decisões com uma plataforma integrada de gestão.</p>
        <button className="demons-button scroll-effect">Solicite uma Demonstração</button>
      </header>

     {/**parte do sobre */} 
      <section id='sobre' className="sobre-section">
      <div className="sobre-software">
        <h2 className="scroll-effect">Sobre o Software</h2>
        <p className="scroll-effect">
          Nosso software foi desenvolvido com o objetivo de promover e impulsionar a gestão de empresas, garantindo uma melhoria significativa na otimização dos processos, redução de custos, aumento da produtividade e melhoria na tomada de decisões através de dados em tempo real.
        </p>
        <p className="scroll-effect">
          Através de um sistema altamente integrado com o banco de dados, todas as informações e dados serão armazenados com segurança, oferecendo fácil acesso para análise e decisões estratégicas. O sistema permite:
        </p>
        <ul className="scroll-effect">
          <li>Monitoramento e registro das vendas em tempo real;</li>
          <li>Cadastro de novos tipos de alimentos e controle de estoques;</li>
          <li>Cadastro e gerenciamento de usuários do sistema;</li>
          <li>Monitoramento do relacionamento com os clientes;</li>
          <li>Gerenciamento das vendas e ordens de compra;</li>
          <li>Dashboard interativo com análise de lucros diários e mensais, total de clientes e usuários.</li>
        </ul>
        <p className="scroll-effect">
          Nosso sistema é a solução completa para empresas que buscam aumentar sua eficiência operacional e alcançar resultados superiores.
        </p>
      </div>
    </section>

      {/* Funcionalidades */}
      <section id="funcionalidades" className="funcionalidades-section">
        <h2 className="scroll-effect boxfuncionalidades funcionalidades">Funcionalidades Principais</h2>
        <div className="todas-funcionalidades">
          <div className="mais-funcionalidades">
            <h3 className="scroll-effect abaixoDeFuncionalidades">Monitoramento e Registro de Vendas</h3>
            <p className="scroll-effect">Rastreie e analise as vendas em tempo real.</p>
          </div>
          <div className="mais-funcionalidades">
            <h3 className="scroll-effect abaixoDeFuncionalidades">Cadastro de Novos Produtos</h3>
            <p className="scroll-effect abaixoDeFuncionalidades">Adicione novos tipos de alimentos e controle o estoque com facilidade.</p>
          </div>
          <div className="mais-funcionalidades">
            <h3 className="scroll-effect abaixoDeFuncionalidades">Gestão de Usuários</h3>
            <p className="scroll-effect abaixoDeFuncionalidades">Gerencie e cadastre usuários para um controle completo.</p>
          </div>
          <div className="mais-funcionalidades">
            <h3 className="scroll-effect abaixoDeFuncionalidades">Monitoramento de Clientes</h3>
            <p className="scroll-effect ">Observe e gerencie o relacionamento com os clientes.</p>
          </div>
        </div>
      </section>

      {/* Integração e Armazenamento de Dados */}
      <section  className="db-section">
        <h2 className="scroll-effect">Integração e Armazenamento Seguro</h2>
        <p className="scroll-effect">Nosso sistema é totalmente integrado ao banco de dados, armazenando e protegendo todas as informações.</p>
      </section>

      {/* Dashboard e Análise */}
      <section className="dashboard-section">
        <h2 className="scroll-effect">Dashboard Analítico</h2>
        <p className="scroll-effect">Acompanhe lucros diários e mensais, total de clientes, usuários e muito mais em nosso dashboard interativo.</p>
      </section>

      {/* Call to Action */}
      <footer className="button-footer">
        <h2 className="scroll-effect">Pronto para Transformar sua Gestão?</h2>
        <button className="demons-button scroll-effect">Comece Agora</button>
      </footer>
    </div>
  );
}
