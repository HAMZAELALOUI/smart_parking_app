import React from 'react';

function BusinessSolutions() {
  return (
    <div className="bg-gray-50 py-16 px-5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our business solutions will help you maximise your revenue and customer satisfaction.</h2>
        
        <div className="grid md:grid-cols-3 gap-12">
          <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <img src="/assets/park1.jpg" alt="Revenue Generation" className="w-full h-48 object-cover"/>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Revenue Generation</h3>
              <p className="text-gray-600 mb-4">Helping car parks improve yield through award-winning tech and our extensive marketing reach.</p>
              <button className="inline-block px-6 py-2 bg-green-500 text-white font-medium text-sm leading-tight rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out">Learn more</button>
            </div>
          </div>
          <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <img src="/assets/park2.jpg" alt="Fleet Management" className="w-full h-48 object-cover"/>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fleet Management</h3>
              <p className="text-gray-600 mb-4">Connecting business fleets to convenient, affordable parking spaces.</p>
              <button className="inline-block px-6 py-2 bg-green-500 text-white font-medium text-sm leading-tight rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out">Learn more</button>
            </div>
          </div>
          <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <img src="/assets/park3.jpg" alt="Cashless" className="w-full h-48 object-cover"/>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Cashless</h3>
              <p className="text-gray-600 mb-4">Our quick & seamless payment solution for on-street parking needs.</p>
              <button className="inline-block px-6 py-2 bg-green-500 text-white font-medium text-sm leading-tight rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out">Learn more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinessSolutions;
