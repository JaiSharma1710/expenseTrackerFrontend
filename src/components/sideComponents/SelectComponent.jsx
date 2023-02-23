import { MONTHS } from '../../constants/GLOBAL';

const Select = ({ handleMonthChange }) => {
  return (
    <select
      onChange={(e) => handleMonthChange(e)}
      className="w-32 p-2 font-semibold bg-white md:w-72"
    >
      {MONTHS.map((month, index) => (
        <option key={index}>{month}</option>
      ))}
    </select>
  );
};

export default Select;
