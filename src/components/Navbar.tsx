'use client';
import { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <div className={`md:flex space-x-10 ${mobileMenuOpen ? 'flex flex-col absolute top-16 left-0 right-0 bg-white p-4 shadow-md z-50 space-y-4' : 'hidden'}`}>
          <Link href="/" className="text-gray-700 hover:text-primary transition-colors">
            Accueil
          </Link>
          <Link href="#features" className="text-gray-700 hover:text-primary transition-colors">
            Fonctionnalités
          </Link>
          <Link href="#pricing" className="text-gray-700 hover:text-primary transition-colors">
            Tarifs
          </Link>
          <Link href="#contact" className="text-gray-700 hover:text-primary transition-colors">
            Contact
          </Link>
        </div>
        <div className="flex space-x-4">
          <Link href="#" className="px-4 py-2 rounded-md text-gray-700 border border-gray-300 hover:bg-gray-50 transition-colors">
            Connexion
          </Link>
          <Link href="#" className="btn-primary px-4 py-2 rounded-md font-medium">
            Créer Votre Boutique
          </Link>
        </div>
        <div className="md:hidden">
          <button className="text-gray-700" onClick={toggleMobileMenu}>
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>
    </nav>
  );
}