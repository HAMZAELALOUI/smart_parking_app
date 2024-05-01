import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   

    const navigate = useNavigate();
    const handleLogin = (e) => {
      e.preventDefault();
      // Simulate login logic
      console.log("Login successful!");
      navigate('/list-space');
  };
    return (
        <div className="max-w-md mx-auto my-10 p-8 bg-white shadow-md rounded-lg">
            <form onSubmit={handleLogin}>
                <h2 className="text-2xl font-semibold mb-5 text-center">Welcome back! Let's get you signed in.</h2>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Email address</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="example@mail.com"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="Enter your password"
                        required
                    />
                    <a href="#" className="text-sm text-green-500 hover:underline mt-1 block">I've forgotten my password</a>
                </div>
                <div className="flex items-center justify-between mt-6">
                    <button type="button" onClick={() => console.log('Cancel')} className="text-gray-600 hover:underline">Cancel</button>
                    <button type="submit" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md">Sign in</button>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;
