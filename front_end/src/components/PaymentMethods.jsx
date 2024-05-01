import React, { useState } from 'react';
import Modal from './Modal';
import CreditCardForm from './CreditCardForm';
import PayPalForm from './PayPalForm';
import BankTransferForm from './BankTransferForm';
import { FaCreditCard, FaPaypal, FaUniversity } from 'react-icons/fa';  // Import appropriate icons

function PaymentMethods() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSelectPaymentMethod = (method) => {
      setSelectedPaymentMethod(method);
  };

  const openModal = () => {
      setIsModalOpen(true);
  };

  const closeModal = () => {
      setIsModalOpen(false);
  };

  const getPaymentForm = (method) => {
      switch (method) {
          case "Credit Card":
              return <CreditCardForm />;
          case "PayPal":
              return <PayPalForm />;
          case "Bank Transfer":
              return <BankTransferForm />;
          default:
              return <div>No form available</div>;
      }
  };

  return (
    <div className="max-w-4xl mx-auto my-10 bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-center mb-6">Choose Your Payment Method</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <PaymentOption
                method="Credit Card"
                Icon={FaCreditCard}
                onSelect={() => handleSelectPaymentMethod("Credit Card")}
                isSelected={selectedPaymentMethod === "Credit Card"}
            />
            <PaymentOption
                method="PayPal"
                Icon={FaPaypal}
                onSelect={() => handleSelectPaymentMethod("PayPal")}
                isSelected={selectedPaymentMethod === "PayPal"}
            />
            <PaymentOption
                method="Bank Transfer"
                Icon={FaUniversity}
                onSelect={() => handleSelectPaymentMethod("Bank Transfer")}
                isSelected={selectedPaymentMethod === "Bank Transfer"}
            />
        </div>
        {selectedPaymentMethod && (
            <div className="text-center mt-10">
                <button onClick={openModal} className="bg-green-600 hover:bg-green-800 text-white font-bold py-3 px-6 rounded-lg transition duration-200">
                    Proceed with {selectedPaymentMethod}
                </button>
            </div>
        )}
        <Modal isOpen={isModalOpen} onClose={closeModal}>
            {getPaymentForm(selectedPaymentMethod)}
        </Modal>
    </div>
  );
}

function PaymentOption({ method, Icon, onSelect, isSelected }) {
  return (
    <div className={`p-4 border ${isSelected ? 'border-blue-500' : 'border-gray-300'} rounded-lg cursor-pointer flex flex-col items-center space-y-4`}
         onClick={onSelect}>
        <Icon className="text-3xl" />
        <h3 className="text-lg font-medium">{method}</h3>
    </div>
  );
}

export default PaymentMethods;
