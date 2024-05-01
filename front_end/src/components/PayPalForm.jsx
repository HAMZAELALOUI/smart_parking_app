import React from 'react';
import { FaPaypal } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function PayPalForm() {
  const navigate = useNavigate();

  const handlePaymentSuccess = () => {
    alert('Payment successful!');
    navigate('/map'); // Assuming you have a route set up for the map
  };
  return (
    <div className="space-y-4 p-5 bg-white shadow rounded-lg">
        <h3 className="text-lg font-semibold text-gray-700 flex items-center space-x-2">
            <FaPaypal className="text-blue-500" />
            <span>PayPal Payment</span>
        </h3>
        <p className="text-sm text-gray-600">Please enter your PayPal account details to proceed with the payment.</p>
        
        <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" placeholder="youremail@example.com" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"/>
        </div>
        
        <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" placeholder="Your password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"/>
        </div>
        
        <button onClick={handlePaymentSuccess} type="submit" className="mt-4 inline-flex items-center px-4 py-2 bg-green-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-green-700 active:bg-green-900 focus:outline-none focus:border-green-900 focus:ring focus:ring-green-300 disabled:opacity-25 transition">
            Proceed with PayPal
        </button>
    </div>
  );
}
