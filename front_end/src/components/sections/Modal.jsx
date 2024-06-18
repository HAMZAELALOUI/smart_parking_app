import React from 'react';

export default function Modal({ children, isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
            <div className="bg-white p-5 rounded-lg">
                <button onClick={onClose} className="absolute top-2 right-2 text-xl font-bold">&times;</button>
                {children}
            </div>
        </div>
    );
}
