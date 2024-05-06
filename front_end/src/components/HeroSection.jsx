import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from 'react-router-dom';

function HeroSection() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
   const navigate =useNavigate();
   const handleSubmit=()=>{
      navigate('/login')
   }
    return (
        <div className="px-4 py-12 bg-cover bg-center" style={{ backgroundImage: `url(/assets/1.jpg)` }}>
            <div className="container mx-auto text-center bg-white bg-opacity-80 rounded-lg p-6">
                <h1 className="text-5xl font-semibold text-gray-800 mb-6">Find Parking Made Easy</h1>
                <p className="text-green-600 text-lg mb-6">
                    Ensuring the best prices and trusted by millions
                </p>
                <div className="space-x-4 mb-6">
                    <button className="text-lg px-6 py-2 border border-gray-300 shadow-sm rounded-full text-gray-800 bg-white hover:bg-gray-100">Hourly/Daily</button>
                    <button className="text-lg px-6 py-2 border border-gray-300 shadow-sm rounded-full text-gray-800 bg-white hover:bg-gray-100">Monthly</button>
                    <button className="text-lg px-6 py-2 border border-gray-300 shadow-sm rounded-full text-gray-800 bg-white hover:bg-green-500 hover:text-white">Yearly</button>
                </div>
                <div className="max-w-md mx-auto flex flex-col items-center gap-4">
                    <input type="text" placeholder="You want to park at?" className="form-input px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-500" />
                    <div className="flex gap-4 w-full">
                        <DatePicker 
                            selected={startDate} 
                            onChange={date => setStartDate(date)} 
                            showTimeSelect 
                            timeFormat="HH:mm"
                            timeIntervals={15}
                            timeCaption="time"
                            dateFormat="MMMM d, yyyy h:mm aa"
                            className="form-input px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <DatePicker 
                            selected={endDate} 
                            onChange={date => setEndDate(date)} 
                            showTimeSelect 
                            timeFormat="HH:mm"
                            timeIntervals={15}
                            timeCaption="time"
                            dateFormat="MMMM d, yyyy h:mm aa"
                            className="form-input px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>
                    <button onClick={handleSubmit} className="bg-green-500 text-white px-6 py-2 rounded-md w-full">Show parking spaces</button>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
