import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignupForm() {

  const navigate=useNavigate()
    const [formData, setFormData] = useState({
        firstName: '',
        surname: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/user-profile")
    };

    return (
        <div className="max-w-md mx-auto my-10 p-8 bg-white shadow-md rounded-lg">
            <form onSubmit={handleSubmit}>
                <h2 className="text-2xl font-semibold mb-5 text-center">Create an account to continue</h2>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">First name</label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Surname</label>
                    <input type="text" name="surname" value={formData.surname} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Email address</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Password</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                    <p className="text-xs text-gray-500 mt-1">Please choose a secure password (at least 8 characters)</p>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Confirm Password</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                    <p className="text-xs text-gray-500 mt-1">Please choose a secure password (at least 8 characters)</p>
                </div>
                <div className="flex items-center justify-between mt-6">
                    <button type="button" onClick={() => console.log('Cancel')} className="text-gray-600 hover:underline">Cancel</button>
                    <button  type="submit" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md">Create account</button>
                </div>
                <p className="text-xs text-gray-500 mt-4 text-center">
                    By proceeding with creating an account you agree to the JustPark <a href="#" className="text-green-500 hover:underline">Terms & Conditions</a> and <a href="#" className="text-green-500 hover:underline">Privacy Policy</a>.
                </p>
            </form>
        </div>
    );
}

export default SignupForm;
