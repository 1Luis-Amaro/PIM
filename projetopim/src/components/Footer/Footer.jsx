import React, { useState, useEffect } from 'react';
import './Footer.css'; // Certifique-se de criar o arquivo CSS com esse nome
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";



export default function Footer() {
    
  return (
    <footer className="footer " >
      <div className="footer-content scroll-effect">
        <div className="footer-logo ">
          <h2>MinhaEmpresa</h2>
        </div>
        <div className="footer-contact">
          <h4>Entre em contato</h4>
          <p>Telefone: <a href="tel:+551999512-2418" className="phone-link">(19) 99512-2418</a></p>
          <p>Email: <a href="mailto:contato@minhaempresa.com" className="email-link">contato@minhaempresa.com</a></p>
        </div>
        <div className="footer-social">
      <h4>Redes sociais</h4>
      <ul className="social-links">
        <li><a href="#" target="_blank" rel="noopener noreferrer"><FaFacebook size={30} /></a></li>
        <li><a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram size={30} /></a></li>
        <li><a href="#" target="_blank" rel="noopener noreferrer"><CiTwitter size={30} /></a></li>
      </ul>
    </div>
      </div>
      <div className="footer-bottom scroll-effect">
        <p>&copy; 2024 MinhaEmpresa - Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}