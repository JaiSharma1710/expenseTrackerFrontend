import { GlobalLogic } from './logic/globalLogic';

import Body from './components/mainComponents/Body';
import Header from './components/mainComponents/Header';
import GlobalModal from './components/sideComponents/GlobalModal';
import Loader from './components/sideComponents/Loader';
import SuccessModal from './components/sideComponents/SuccessModal';
import AddExpenseForm from './components/sideComponents/AddExpenseForm';

function App() {
  const {
    handleMonthChange,
    handleModalDisplay,
    submitHandler,
    isFormActive,
    isLoading,
    isSubmitSuccess,
    _expenseData,
    totalSpend,
  } = GlobalLogic();

  return (
    <>
      {isFormActive && (
        <GlobalModal handleModalDisplay={handleModalDisplay}>
          {!isSubmitSuccess ? (
            <AddExpenseForm
              handleModalDisplay={handleModalDisplay}
              submitHandler={submitHandler}
            />
          ) : (
            <SuccessModal handleModalDisplay={handleModalDisplay} />
          )}
        </GlobalModal>
      )}
      {isLoading && <Loader />}
      <Header handleMonthChange={handleMonthChange} />
      <Body
        _expenseData={_expenseData}
        totalSpend={totalSpend}
        handleModalDisplay={handleModalDisplay}
      />
    </>
  );
}

export default App;
