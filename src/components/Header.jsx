import React from 'react';

function Header() {
  return (
    <header className="bg-gray-800 text-white shadow-md">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <ul className="flex space-x-6">
          <li><a href="#home" className="hover:text-gray-400">Home</a></li>
          <li><a href="#about" className="hover:text-gray-400">About</a></li>
          <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
          <li><a href="#skills" className="hover:text-gray-400">Skills</a></li>
          <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
