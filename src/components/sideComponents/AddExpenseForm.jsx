import { useRef } from 'react';

function AddExpenseForm({ submitHandler, handleModalDisplay }) {
  const titleRef = useRef();
  const amountRef = useRef();
  const dateRef = useRef();
  const typeRef = useRef();

  return (
    <>
      <span
        onClick={() => handleModalDisplay(false)}
        className="z-[2] absolute flex justify-center items-center rounded-full border -right-[1rem] bottom-[24rem] cursor-pointer w-10 h-10 bg-white"
      >
        X
      </span>
      <h1 className="text-center mb-4 font-bold text-green-600 text-xl">
        Add Expense
      </h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitHandler({
            amount: amountRef.current.value,
            date: dateRef.current.value,
            expenseType: typeRef.current.value,
            title: titleRef.current.value,
          });
        }}
        className="flex flex-col gap-4"
      >
        <span>
          <label htmlFor="title">Title:</label>
          <br />
          <input
            ref={titleRef}
            className="border rounded border-gray-500 h-8 w-full"
            type="text"
            id="title"
          />
        </span>
        <span>
          <label htmlFor="date">Date:</label>
          <br />
          <input
            ref={dateRef}
            className="border rounded border-gray-500 h-8 w-full"
            type="date"
            id="date"
          />
        </span>
        <span>
          <label htmlFor="amount">amount:</label>
          <br />
          <input
            ref={amountRef}
            className="border rounded border-gray-500 h-8 w-full"
            type="number"
            id="amount"
          />
        </span>
        <span>
          <label htmlFor="type">Type:</label>
          <select
            ref={typeRef}
            id="type"
            className="border rounded border-gray-500 h-8 w-full"
          >
            <option>Food</option>
            <option>Shopping</option>
            <option>Fun</option>
            <option>Bill</option>
          </select>
        </span>
        <button
          type="submit"
          className="w-full bg-green-100 font-semibold text-green-500 py-2 border border-green-500"
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default AddExpenseForm;
