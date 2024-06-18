import React from 'react';

function Footer() {
  return (
    <footer className=" text-white bg-gray-700">
      <div className="container mx-auto px-4 py-10 grid grid-cols-4 gap-8">
        {/* Trustpilot and Social Media Section */}
        <div>
          <h4 className="font-bold text-xl text-green-600 hover:text-green-800">EmsiPark</h4>
          <div className="flex items-center space-x-2 my-2">
            <img src="/path_to_trustpilot_icon.svg" alt="Trustpilot" />
            <span>TrustScore 4.5 113,041 reviews</span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="hover:text-gray-300"><i className="fab fa-instagram"></i></a>
            <a href="#" className="hover:text-gray-300"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:text-gray-300"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <select className="mt-4 border border-gray-700 text-white bg-blue-950">
            <option>English</option>
            {/* Add other languages */}
          </select>
        </div>

        {/* Link Sections */}
        { /* Dynamically creating these could involve mapping through an array of section objects if preferred */ }
        <div>
          <h4 className="font-bold">Information</h4>
          <ul>
            <li><a href="#" className="hover:text-gray-300">About us</a></li>
            <li><a href="#" className="hover:text-gray-300">Affiliates</a></li>
            {/* More links */}
          </ul>
        </div>
        <div>
          <h4 className="font-bold">Services</h4>
          <ul>
            <li><a href="#" className="hover:text-gray-300">Business accounts</a></li>
            <li><a href="#" className="hover:text-gray-300">Car park management</a></li>
            {/* More links */}
          </ul>
        </div>
        <div>
          <h4 className="font-bold">Points of Interest</h4>
          <ul>
            <li><a href="#" className="hover:text-gray-300">Airport parking</a></li>
            <li><a href="#" className="hover:text-gray-300">City parking</a></li>
            {/* More links */}
          </ul>
        </div>

        {/* Legal and Address Section */}
        <div className="col-span-4 mt-10">
          <hr className="border-gray-700" />
          <p className="text-gray-400 text-sm mt-2">
            EmsiPark is the trading name of EmsiPark Parking Limited Registered in Moroocco No. 05967777 Dunn's Hat Factory, 106 - 110 Kentish Town Road,   Marrakech, NW1 9PX, UK
          </p>
          <p className="text-gray-400 text-sm mt-1">
            © Copyright EmsiPark 2024
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
