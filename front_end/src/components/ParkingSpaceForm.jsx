import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ParkingSpaceForm() {
    const [spaceType, setSpaceType] = useState('');
    const [numberOfSpaces, setNumberOfSpaces] = useState(0);
    const navigate = useNavigate();

    const handleNumberOfSpacesChange = (increment) => {
        setNumberOfSpaces(prev => prev + increment);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log({ spaceType, numberOfSpaces });
      navigate('/parking-spots-display'); // Adjust the route as needed
  };



    return (
        <div className="max-w-7xl mx-auto my-12 bg-white shadow-xl rounded-xl overflow-hidden">
            <div className="flex">
                {/* Image container with more visual prominence */}
                <div className="w-3/5 bg-cover bg-center" style={{ backgroundImage: `url(/assets/carpark.jpg)` }}>
                    {/* Optionally add a gradient or overlay here */}
                </div>

                {/* Form container with adjusted padding and more focus on form elements */}
                <div className="w-2/5 p-12">
                    <form onSubmit={handleSubmit}>
                        <h2 className="text-3xl font-semibold mb-6">Tell us a little about your Car</h2>
                        <div className="mb-6">
                            <label className="block text-sm font-medium mb-2">What type of Car do you have?</label>
                            <select 
                                value={spaceType} 
                                onChange={(e) => setSpaceType(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-md"
                            >
                                <option value="">Select car type</option>
                                <option value="car_park">Car</option>
                                <option value="garage">Bike</option>
                                {/* Add other space types as needed */}
                            </select>
                        </div>
                        <div className="mb-6 flex items-center space-x-4">
                            <label className="text-sm font-medium">How many cars do you want to park?</label>
                            <div className="flex items-center">
                                <button type="button" onClick={() => handleNumberOfSpacesChange(-1)} disabled={numberOfSpaces <= 0} className="px-4 py-2 border rounded-l-md bg-gray-200 hover:bg-gray-300 text-gray-700">-</button>
                                <input type="text" value={numberOfSpaces} readOnly className="w-16 text-center border-t border-b" />
                                <button type="button" onClick={() => handleNumberOfSpacesChange(1)} className="px-4 py-2 border rounded-r-md bg-gray-200 hover:bg-gray-300 text-gray-700">+</button>
                            </div>
                        </div>
                        <button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md transition-colors duration-200">Continue</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ParkingSpaceForm;
