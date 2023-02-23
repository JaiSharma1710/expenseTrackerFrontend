import { IMAGES_CDN } from '../../constants/IMAGES';

const CARD_PROPERTIES = {
  FOOD: 'bg-green-100',
  SHOPPING: 'bg-yellow-100',
  FUN: 'bg-red-100',
  BILLS: 'bg-violet-100',
};

function ExpenseDivisionCard({ type, title, amount }) {
  return (
    <div className="flex gap-3 justify-center items-center md:gap-5">
      <div
        className={`${CARD_PROPERTIES[type]} h-14 w-14 flex justify-center items-center rounded border-2 border-black md:w-24 md:h-24`}
      >
        <img src={IMAGES_CDN[type]} className="w-12 h-12 md:w-20 md:h-20" />
      </div>
      <span className="leading-5 w-[4.5rem] md:w-28">
        <h2 className="font-bold md:text-xl">{title}</h2>
        <p className="font-light md:text-lg">{amount}</p>
      </span>
    </div>
  );
}

export default ExpenseDivisionCard;
