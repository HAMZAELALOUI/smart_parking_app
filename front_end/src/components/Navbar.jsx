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

        function navigateAboutUs(){
            navigate('/about-us')
            }

            function navigateHow(){
                navigate('/how-it-works')
                }
            function navigateHelp(){
                navigate('/help')
                }
    return (
        <header className="bg-white py-4 shadow-md  fixed top-0 left-0 w-full z-50 ">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="logo">
                    <a onClick={handleIconeClick} href="#" className="font-bold text-xl text-green-600 hover:text-green-800">Emsi Park</a>
                </div>
                <nav>
                    <ul className="flex items-center space-x-4">
                        <li><a href="#" className="text-gray-600 hover:text-gray-800 transition duration-200 ease-in-out" onClick={navigateHow}>How it works</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-gray-800 transition duration-200 ease-in-out" onClick={navigateAboutUs}>About Us</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-gray-800 transition duration-200 ease-in-out" onClick={navigateContact}>Contact Us</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-gray-800 transition duration-200 ease-in-out" onClick={navigateHelp}>Help</a></li>

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
