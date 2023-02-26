import BodyLeftSection from './BodyLeftSection';
import BodyRightSection from './BodyRightSection';

const Body = ({
  handleModalDisplay,
  _expenseData,
  totalSpend,
  _totalExpense,
  deleteExpenseData,
}) => {
  return (
    <div className="w-screen h-[37.5rem] flex flex-col-reverse md:h-[41.8rem] md:flex-row">
      <BodyLeftSection
        totalSpend={totalSpend}
        _expenseData={_expenseData}
        handleModalDisplay={handleModalDisplay}
        deleteExpenseData={deleteExpenseData}
      />
      <BodyRightSection _totalExpense={_totalExpense} />
    </div>
  );
};

export default Body;
