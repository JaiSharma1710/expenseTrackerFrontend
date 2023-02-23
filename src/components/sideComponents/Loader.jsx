import loader from '../../assets//loader.gif';

function Loader() {
  return (
    <div className="flex justify-center items-center w-full h-full absolute">
      <div className="bg-black w-full h-full absolute z-[3] opacity-50" />
      <img src={loader} className="relative w-32 h-32 rounded z-[4]" />
    </div>
  );
}

export default Loader;
