import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function ReservationDetails() {
  const navigate = useNavigate();

    const [vehicleDetails, setVehicleDetails] = useState({
        makeModel: '',
        licensePlate: '',
        state: ''
    });
    const [locationError, setLocationError] = useState('');

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setVehicleDetails(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleLocation = () => {
        if (!navigator.geolocation) {
            setLocationError('Geolocation is not supported by your browser');
            return;
        }
    
        navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;
            const apiKey = '40fcbde3fd7c42faae8b8e189eb10ce9';
            const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`;
    
            try {
                const response = await axios.get(url);
                const location = response.data.results[0].components.city || response.data.results[0].components.town || 'Location not found';
                setVehicleDetails({ ...vehicleDetails, licensePlate: location });
            } catch (error) {
                setLocationError('Unable to retrieve your location');
                console.error(error);
            }
        }, () => {
            setLocationError('Unable to retrieve your location');
        });
    };
    

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/payement');
        
        // Further processing or API calls can be made here
    };

    return (
        <div className="max-w-4xl mx-auto my-10 bg-white shadow-md rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-center mb-6">Reservation Details</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Name</label>
                    <input
                        type="text"
                        name="makeModel"
                        value={vehicleDetails.makeModel}
                        onChange={handleInputChange}
                        placeholder="Enter Your Name"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Postal Code</label>
                    <input
                        type="tel"
                        name="makeModel"
                        value={vehicleDetails.makeModel}
                        onChange={handleInputChange}
                        placeholder="Enter Your Postal Code"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>
                <div className="mb-4 relative">
                    <label className="block text-sm font-medium mb-1">Your Location</label>
                    <input
                        type="text"
                        name="licensePlate"
                        value={vehicleDetails.licensePlate}
                        onChange={handleInputChange}
                        placeholder="Enter Your Location"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        readOnly
                    />
                    <button 
                        type="button"
                        onClick={handleLocation}
                        className="absolute bottom-0 inset-y-6  right-0 px-2 text-white bg-blue-500 hover:bg-blue-600 rounded-r-md"
                    >
                        Use GPS
                    </button>
                    {locationError && <p className="text-red-500 text-xs mt-1">{locationError}</p>}
                </div>
                <button type="submit" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md">
                    Book
                </button>
            </form>
        </div>
    );
}

export default ReservationDetails;
