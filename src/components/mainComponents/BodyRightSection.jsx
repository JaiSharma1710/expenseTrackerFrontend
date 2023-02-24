import ExpenseDivisionCard from '../sideComponents/ExpenseDivisionCard';

function BodyRightSection({ _totalExpense }) {
  console.log(_totalExpense);

  return (
    <div className="h-1/4 grid grid-cols-2 border-b-2 bg-slate-50 md:border-l-2 md:grid-cols-1 md:h-full md:w-1/4">
      {_totalExpense.map(({ _id, total }, index) => (
        <ExpenseDivisionCard
          key={index}
          total={total}
          type={_id.toUpperCase()}
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
