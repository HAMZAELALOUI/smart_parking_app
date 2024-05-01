import React from "react";
import { Link, useNavigate } from "react-router-dom";

// Navbar.js
export default function Navbar() {
    const navigate=useNavigate();

    function handleIconeClick(){
    navigate('/')
    }
    function navigateContact(){
        navigate('/contact')
        }
    return (
        <header className="bg-white py-4 shadow-md">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="logo">
                    <a onClick={handleIconeClick} href="#" className="font-bold text-xl text-green-600 hover:text-green-800">Emsi Park</a>
                </div>
                <nav>
                    <ul className="flex items-center space-x-4">
                        <li><a href="#" className="text-gray-600 hover:text-gray-800 transition duration-200 ease-in-out">How it works</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-gray-800 transition duration-200 ease-in-out">Rent Your Space</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-gray-800 transition duration-200 ease-in-out" onClick={navigateContact}>Contact Us</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-gray-800 transition duration-200 ease-in-out">Help</a></li>

                        {/* Login Button */}
                        <li>
                            <Link to="/login" className="bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-md transition duration-200 ease-in-out">
                                Sign In
                            </Link>
                        </li>

                        {/* Sign Up Button */}
                        <li>
                            <Link to="/signup" className="bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-md transition duration-200 ease-in-out">
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
