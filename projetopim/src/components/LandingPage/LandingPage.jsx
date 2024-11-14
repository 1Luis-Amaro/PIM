import React from 'react';
import './LandingPage.css';
import otimizarProcessosImage from '../../assets/otimizarprocessos.jpg';
import reduzirCustos from '../../assets/Reduzir-custos.jpg';
import tomadaDecisão from '../../assets/tomadadecisão.jpeg';



export default function LandingPage() {
  return (
    <div className="landing-page">

      {/* Hero Section */}
      <header className="hero-section">
        <h1>Impulsione sua Gestão com Nosso Software</h1>
        <p>Otimize processos, reduza custos e melhore a tomada de decisões com uma plataforma integrada de gestão.</p>
        <button className="cta-button">Solicite uma Demonstração</button>
      </header>


      {/* Funcionalidades */}
      <section className="features-section">
        <h2>Funcionalidades Principais</h2>
        <div className="features">
          <div className="feature">
            <h3>Monitoramento e Registro de Vendas</h3>
            <p>Rastreie e analise as vendas em tempo real.</p>
          </div>
          <div className="feature">
            <h3>Cadastro de Novos Produtos</h3>
            <p>Adicione novos tipos de alimentos e controle o estoque com facilidade.</p>
          </div>
          <div className="feature">
            <h3>Gestão de Usuários</h3>
            <p>Gerencie e cadastre usuários para um controle completo.</p>
          </div>
          <div className="feature">
            <h3>Monitoramento de Clientes</h3>
            <p>Observe e gerencie o relacionamento com os clientes.</p>
          </div>
        </div>
      </section>

      {/* Integração e Armazenamento de Dados */}
      <section className="data-section">
        <h2>Integração e Armazenamento Seguro</h2>
        <p>Nosso sistema é totalmente integrado ao banco de dados, armazenando e protegendo todas as informações.</p>
      </section>

      {/* Dashboard e Análise */}
      <section className="dashboard-section">
        <h2>Dashboard Analítico</h2>
        <p>Acompanhe lucros diários e mensais, total de clientes, usuários e muito mais em nosso dashboard interativo.</p>
      </section>

      {/* Call to Action */}
      <footer className="cta-footer">
        <h2>Pronto para Transformar sua Gestão?</h2>
        <button className="cta-button">Comece Agora</button>
      </footer>
    </div>
  );
}