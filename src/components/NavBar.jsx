import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return(
        <nav>
            <div className="mx-auto px-4 ml-10 mr-10 mt-10 rounded-tr-3xl rounded-bl-3xl border-solid border-r-8 border-r-red-600 border-t-4 border-t-red-600">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/">
                            <img src="/assets/Logo.png" alt="F1 Zone Logo" className="w-52 h-auto mt-5"/>
                        </Link>
                    </div>
                    <div className="hidden md:flex space-x-12 mr-9 mt-5">
                        <Link to="/" className="font-f1regular text-gray-900 hover:text-red-600 pb-1 pr-4 pl-3 rounded-br-2xl border-solid border-r-4 border-b-gray-900 border-b-2 border-r-gray-900 hover:border-b-red-600 hover:border-r-red-600 active:border-r-8 active:border-b-4">Home</Link>
                        <Link to="/DriversScreen" className="font-f1regular text-gray-900 hover:text-red-600 pb-1 pr-4 pl-3 rounded-br-2xl border-solid border-r-4 border-b-gray-900 border-b-2 border-r-gray-900 hover:border-b-red-600 hover:border-r-red-600 active:border-r-8 active:border-b-4">Drivers</Link>
                        <Link to="/TeamsScreen" className="font-f1regular text-gray-900 hover:text-red-600 pb-1 pr-4 pl-3 rounded-br-2xl border-solid border-r-4 border-b-gray-900 border-b-2 border-r-gray-900 hover:border-b-red-600 hover:border-r-red-600 active:border-r-8 active:border-b-4">Teams</Link>
                        <Link to="/TracksScreen" className="font-f1regular text-gray-900 hover:text-red-600 pb-1 pr-4 pl-3 rounded-br-2xl border-solid border-r-4 border-b-gray-900 border-b-2 border-r-gray-900 hover:border-b-red-600 hover:border-r-red-600 active:border-r-8 active:border-b-4">Races</Link>
                        <Link to="/HistoryScreen" className="font-f1regular text-gray-900 hover:text-red-600 pb-1 pr-4 pl-3 rounded-br-2xl border-solid border-r-4 border-b-gray-900 border-b-2 border-r-gray-900 hover:border-b-red-600 hover:border-r-red-600 active:border-r-8 active:border-b-4">History</Link>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button onClick={toggleMenu} className="text-gray-900 focus:outline-none">
                            {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
                        </button>
                    </div>
                </div>
                {isOpen && (
                    <div className="md:hidden mt-2 flex flex-col space-y-4">
                        <Link to="/" className="font-f1regular text-gray-900 hover:text-red-600 pb-1 pr-4 pl-3 rounded-br-2xl border-solid border-r-4 border-b-gray-900 border-b-2 border-r-gray-900 hover:border-b-red-600 hover:border-r-red-600 active:border-r-8 active:border-b-4" onClick={toggleMenu}>Home</Link>
                        <Link to="/DriversScreen" className="font-f1regular text-gray-900 hover:text-red-600 pb-1 pr-4 pl-3 rounded-br-2xl border-solid border-r-4 border-b-gray-900 border-b-2 border-r-gray-900 hover:border-b-red-600 hover:border-r-red-600 active:border-r-8 active:border-b-4" onClick={toggleMenu}>Drivers</Link>
                        <Link to="/TeamsScreen" className="font-f1regular text-gray-900 hover:text-red-600 pb-1 pr-4 pl-3 rounded-br-2xl border-solid border-r-4 border-b-gray-900 border-b-2 border-r-gray-900 hover:border-b-red-600 hover:border-r-red-600 active:border-r-8 active:border-b-4" onClick={toggleMenu}>Teams</Link>
                        <Link to="/TracksScreen" className="font-f1regular text-gray-900 hover:text-red-600 pb-1 pr-4 pl-3 rounded-br-2xl border-solid border-r-4 border-b-gray-900 border-b-2 border-r-gray-900 hover:border-b-red-600 hover:border-r-red-600 active:border-r-8 active:border-b-4" onClick={toggleMenu}>Races</Link>
                        <Link to="/HistoryScreen" className="font-f1regular text-gray-900 hover:text-red-600 pb-1 pr-4 pl-3 rounded-br-2xl border-solid border-r-4 border-b-gray-900 border-b-2 border-r-gray-900 hover:border-b-red-600 hover:border-r-red-600 active:border-r-8 active:border-b-4" onClick={toggleMenu}>History</Link>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default NavBar;
