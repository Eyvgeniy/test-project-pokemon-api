import svg from '../logo.svg';

const Loader = () => {
  return (
    <div className=" w-100 h-100 d-flex justify-content-center align-items-center">
      <img className="App-logo" src={svg} alt="loading" />
    </div>
  );
};

export default Loader;
