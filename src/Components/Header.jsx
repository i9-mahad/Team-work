import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="sticky top-0 z-50 bg-slate-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
            <div className="text-2xl font-bold tracking-wide text-emerald-400">
                <Link to="/">MyWebsite</Link>
            </div>

            <nav>
                <ul className="flex items-center gap-6 m-0 p-0 list-none">
                    <li>
                        <Link to="/" className="text-gray-300 font-medium hover:text-emerald-400 transition-colors duration-300">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/product" className="text-gray-300 font-medium hover:text-emerald-400 transition-colors duration-300">
                            Product
                        </Link>
                    </li>
                    <li>
                        <Link to="/blog" className="text-gray-300 font-medium hover:text-emerald-400 transition-colors duration-300">
                            Blog
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;