import React from 'react';

function SuccessModal({ handleModalDisplay }) {
  return (
    <>
      <h1 className="text-center mb-4 font-bold text-green-600 text-xl">
        Successfully Added Expense To Your Diary
      </h1>
      <button
        onClick={() => handleModalDisplay(false, true)}
        className="w-full bg-green-100 font-semibold text-green-500 py-2 border border-green-500"
      >
        Close
      </button>
    </>
  );
}

export default SuccessModal;
