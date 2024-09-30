import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="relative z-10 bg-white p-6 rounded-lg shadow-xl max-w-md w-full">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          &times;
        </button>
        


        <div className="mt-4">

            <h1 className="text-2xl font-bold text-center">HIGH SEAS</h1>
            <p className="text-center text-gray-700 mb-6">Are you 21 or older?</p>
            <p className="text-center text-gray-500 text-sm mb-6">*Or 18+ with a valid medical recommendation.</p>

            <div className="flex justify-center space-x-4">
                <button
                onClick={onClose}
                className="bg-black text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                    Yes
                </button>
                <button
                onClick={onClose}
                className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-100 transition"
                >
                    No
                </button>
            </div>
            
            {/* {children}  */}
            {/* remove this line to render children inside the modal */}
            
        </div>
      </div>
    </div>
  );
};

export default Modal;
