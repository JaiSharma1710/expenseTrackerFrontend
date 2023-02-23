function GlobalModal({ children }) {
  return (
    <div className="absolute flex justify-center items-center w-screen h-screen">
      <div className="absolute w-screen h-screen bg-black opacity-20" />
      <div className="relative w-[75%] md:w-[50%] lg:w-[30%] bg-white p-4 rounded-md">
        {children}
      </div>
    </div>
  );
}

export default GlobalModal;
