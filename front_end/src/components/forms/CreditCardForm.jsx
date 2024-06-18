import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FaCreditCard } from 'react-icons/fa';

// Validation schema using Yup
const schema = yup.object({
  cardNumber: yup.string().required("Card number is required").matches(/^[0-9]+$/, "Card number must be numeric").min(16, "Card number must be exactly 16 digits").max(16, "Card number must be exactly 16 digits"),
  cardHolder: yup.string().required("Card holder name is required"),
  expiryDate: yup.string().required("Expiry date is required").matches(/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/, "Expiry date must be MM/YY"),
  cvv: yup.string().required("CVV is required").matches(/^[0-9]{3,4}$/, "CVV must be 3 or 4 digits")
});

export default function CreditCardForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = data => {
    console.log(data);
    alert('Payment successful!');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-5 bg-white shadow rounded-lg">
      <h3 className="text-lg font-semibold text-gray-700 flex items-center space-x-2">
        <FaCreditCard className="text-blue-500" />
        <span>Credit Card Payment</span>
      </h3>
      
      <div>
        <label className="block text-sm font-medium text-gray-700">Card Number</label>
        <input {...register("cardNumber")} type="text" placeholder="1234 5678 9101 1121" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"/>
        <p className="text-red-500 text-xs mt-1">{errors.cardNumber?.message}</p>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700">Card Holder</label>
        <input {...register("cardHolder")} type="text" placeholder="Name Surname" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"/>
        <p className="text-red-500 text-xs mt-1">{errors.cardHolder?.message}</p>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
          <input {...register("expiryDate")} type="text" placeholder="MM/YY" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"/>
          <p className="text-red-500 text-xs mt-1">{errors.expiryDate?.message}</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">CVV</label>
          <input {...register("cvv")} type="text" placeholder="123" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"/>
          <p className="text-red-500 text-xs mt-1">{errors.cvv?.message}</p>
        </div>
      </div>
      
      <button type="submit" className="inline-flex items-center px-4 py-2 bg-green-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-green-700 active:bg-green-900 focus:outline-none focus:border-green-900 focus:ring focus:ring-green-300 disabled:opacity-25 transition">
        Submit Payment
      </button>
    </form>
  );
}
