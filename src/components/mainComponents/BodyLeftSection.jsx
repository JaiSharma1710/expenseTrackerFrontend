import ICONS from '../../assets/ICONS';
import { IMAGES_CDN } from '../../constants/IMAGES';
import DailyExpenseSection from './DailyExpenseSection';

function BodyLeftSection({
  handleModalDisplay,
  _expenseData,
  totalSpend,
  deleteExpenseData,
}) {
  return (
    <div className="h-3/4 bg-slate-100 md:h-full md:w-3/4">
      <div className="px-4 py-2 flex justify-between items-center md:px-8 md:py-4">
        <TotalSection totalSpend={totalSpend} />
        <button
          onClick={() => handleModalDisplay(true)}
          className="flex items-center outline-dotted outline-2 outline-gray-400 p-3 text-gray-600 rounded gap-1 h-4 md:text-2xl md:h-8"
        >
          <ICONS.ADD className="w-4 h-4" /> Add
        </button>
      </div>
      <div className="w-full h-4/5 flex gap-2 flex-col items-center overflow-y-scroll py-4">
        {_expenseData.map(({ date, title, amount, expenseType, _id }) => (
          <DailyExpenseSection
            id={_id}
            date={date}
            title={title}
            amount={amount}
            expenseType={expenseType}
            deleteExpenseData={deleteExpenseData}
          />
        ))}
      </div>
    </div>
  );
}

export default BodyLeftSection;

const TotalSection = ({ totalSpend }) => (
  <div className="flex gap-3 items-center">
    <img src={IMAGES_CDN.WALLET} className="w-auto h-16" />
    <h2 className="text-3xl font-bold md:text-6xl">
      ₹{totalSpend}
      <span className="text-xs font-medium text-gray-400 ml-2 md:text-sm">
        / ₹5000
      </span>
    </h2>
  </div>
);
