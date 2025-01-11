import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
    { name: 'notebooks', label: 'Ноутбуки, планшети, електронні книги' },
    { name: 'networks', label: 'Мережі, інтернет' },
    { name: 'gaming', label: 'Товари для геймерів' },
    { name: 'peripherals', label: 'Комп\'ютерна периферія' },
];

const Header = () => {
    return (
        <header className="header bg-gray-800 text-white">
            <div className="container mx-auto flex justify-between items-center py-4">
                <h1 className="text-2xl font-bold">
                    <Link to="/" className="title hover:text-yellow-400">HOTLINE</Link>
                </h1>
                <nav>             
                    {categories.map((category) => (                  
                        <>
                            <Link
                                to={`/category/${category.name}`}
                                className="hover:text-yellow-400">
                                {category.label}
                            </Link>
                            <br></br>
                        </>             
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;
