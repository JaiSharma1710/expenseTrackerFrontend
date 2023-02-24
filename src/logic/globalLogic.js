import { useEffect, useState } from 'react';
import axios from 'axios';

export const GlobalLogic = () => {
  const [isFormActive, setIsFormActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
  const [_expenseData, _setExpenseData] = useState([]);
  const [totalSpend, setTotalSpend] = useState(0);
  const [_totalExpense, _setTotalExpense] = useState([]);

  useEffect(() => {
    getExpenseData();
  }, []);

  useEffect(() => {
    if (_expenseData.length > 0) {
      const total = _expenseData.reduce((acc, curr) => acc + curr.amount, 0);
      setTotalSpend(total);
    }
  }, [_expenseData]);

  const getExpenseData = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/api/v1/expense`,
    );

    const totalData = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/api/v1/expense/total`,
    );

    _setExpenseData(data.data);
    _setTotalExpense(totalData.data.data);
  };

  const handleMonthChange = (e) => {
    console.log(e.target.value);
  };

  const handleModalDisplay = (state, updateCards = false) => {
    setIsFormActive(state);
    setIsSubmitSuccess(false);
    if (updateCards) getExpenseData();
  };

  const submitHandler = async (formData) => {
    try {
      setIsLoading(true);
      const response = await axios.post(
        'http://localhost:7000/api/v1/expense',
        formData,
      );
      if (response.status === 200) setIsSubmitSuccess(true);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return {
    handleMonthChange,
    handleModalDisplay,
    submitHandler,
    isFormActive,
    isLoading,
    isSubmitSuccess,
    _expenseData,
    totalSpend,
    _totalExpense,
  };
};
