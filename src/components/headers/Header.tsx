// Header.tsx
import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-white shadow-md p-4 fixed w-full top-0 left-0 z-10">
            <nav>
                <ul className="flex space-x-4">
                    <li><a href="#home" className="hover:text-blue-500">Home</a></li>
                    <li><a href="#about" className="hover:text-blue-500">About</a></li>
                    <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
