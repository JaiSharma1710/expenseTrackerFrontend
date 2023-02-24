import dayjs from 'dayjs';
import { IMAGES_CDN } from '../../constants/IMAGES';

const { FOOD, FUN, SHOPPING, BILLS } = IMAGES_CDN;

const expenseTypeImage = {
  Food: FOOD,
  Fun: FUN,
  Shopping: SHOPPING,
  Bills: BILLS,
};

function DailyExpenseSection({ date, title, amount, expenseType }) {
  return (
    <div className="w-[95%] py-6 rounded h-20 shadow-sm bg-white flex justify-between px-4 items-center">
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-bold">{title.toUpperCase()}</h2>
        <p className="text-sm font-light">
          {dayjs(date).format('DD/MMM/YYYY')}
        </p>
      </div>
      <div className="flex gap-2">
        <p>Rs.{amount}</p>
        <img src={expenseTypeImage[expenseType]} className="w-6 h-6" />
      </div>
    </div>
  );
}

export default DailyExpenseSection;
