import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black p-4 shadow-lg sticky top-0 z-50 border-b border-main-purple/20">
      <div className="container mx-auto flex justify-between items-center flex-wrap">
        <Link to="/" className="flex items-center">
          <img src="/kin-logo.png" alt="Kin Tattoo Logo" className="h-12 w-auto mr-3" />
          <span className="text-2xl font-bold text-main-purple">Kin Tattoo</span>
        </Link>

        {/* Botão Menu Mobile */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="text-white md:hidden focus:outline-none"
        >
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
        </button>

        {/* Links de Navegação */}
        <div className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 w-full md:w-auto`}>
          <Link to="/" className="block py-2 px-4 rounded-md text-white hover:bg-main-purple transition-colors">O Estúdio</Link>
          <Link to="/galeria" className="block py-2 px-4 rounded-md text-white hover:bg-main-purple transition-colors">Galeria</Link>
          <a href="#services" className="block py-2 px-4 rounded-md text-white hover:bg-main-purple transition-colors">Serviços</a>
          <a href="#contact-section" className="block py-2 px-4 rounded-md text-white hover:bg-main-purple transition-colors">Agendamento</a>
        </div>
      </div>
    </nav>
  );
}