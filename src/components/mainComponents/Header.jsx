import ICONS from '../../assets/ICONS';
import Select from '../sideComponents/SelectComponent';

function Header({ handleMonthChange }) {
  return (
    <header className="p-4 bg-green-50 flex justify-around md:justify-between md:py-4 md:px-10 border-b-2">
      <div className="flex gap-2 items-center font-bold text-xl">
        <ICONS.MONEY className="w-8 h-8 text-green-700" /> BUDGET
      </div>
      <Select handleMonthChange={handleMonthChange} />
    </header>
  );
}

export default Header;
