function DailyExpenseSection({ date, title, amount }) {
  return (
    <div className="w-[95%] py-6 rounded h-20 shadow-sm bg-white flex justify-between px-4 items-center">
      <div className="flex flex-col">
        <h2>{title}</h2>
        <p>{date}</p>
      </div>
      <p>{amount}</p>
    </div>
  );
}

export default DailyExpenseSection;
