import React from 'react';
import { FaUniversity } from 'react-icons/fa';

export default function BankTransferForm() {
  return (
    <div className="space-y-4 p-5 bg-white shadow rounded-lg">
        <h3 className="text-lg font-semibold text-gray-700 flex items-center space-x-2">
            <FaUniversity className="text-blue-500" />
            <span>Bank Transfer</span>
        </h3>
        <p className="text-sm text-gray-600">Please provide your bank details to proceed with the transfer.</p>
        
        <div>
            <label className="block text-sm font-medium text-gray-700">Account Holder</label>
            <input type="text" placeholder="Account Holder's Name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"/>
        </div>
        
        <div>
            <label className="block text-sm font-medium text-gray-700">Account Number</label>
            <input type="text" placeholder="Bank Account Number" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"/>
        </div>
        
        <div>
            <label className="block text-sm font-medium text-gray-700">Bank Name</label>
            <input type="text" placeholder="Name of the Bank" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"/>
        </div>
        
        <div>
            <label className="block text-sm font-medium text-gray-700">SWIFT / BIC Code</label>
            <input type="text" placeholder="SWIFT or BIC Code" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"/>
        </div>
        
        <button type="submit" className="mt-4 inline-flex items-center px-4 py-2 bg-green-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-green-700 active:bg-green-900 focus:outline-none focus:border-green-900 focus:ring focus:ring-green-300 disabled:opacity-25 transition">
            Proceed with Bank Transfer
        </button>
    </div>
  );
}
