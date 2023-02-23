import ExpenseDivisionCard from '../sideComponents/ExpenseDivisionCard';

function BodyRightSection() {
  return (
    <div className="h-1/4 grid grid-cols-2 border-b-2 bg-slate-50 md:border-l-2 md:grid-cols-1 md:h-full md:w-1/4">
      {dummyData.map(({ type, title, amount }, index) => (
        <ExpenseDivisionCard
          key={index}
          type={type}
          title={title}
          amount={amount}
        />
      ))}
    </div>
  );
}

export default BodyRightSection;

const dummyData = [
  { type: 'FOOD', title: 'Food', amount: 100 },
  { type: 'SHOPPING', title: 'shopping', amount: 100 },
  { type: 'FUN', title: 'Fun', amount: 100 },
  { type: 'BILLS', title: 'Bill', amount: 100 },
];
