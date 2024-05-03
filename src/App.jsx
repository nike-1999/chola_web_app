import "./App.css";

function App() {
  const redirectToURL = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="bg-violet-300 h-screen ">
      <img
        src="./src/assets/logo.svg"
        className="w-70	h-36"
        alt="Passenger App"
      />
      <div className="flex items-center justify-center h-400">
        <div className="flex flex-col items-center">
          <img
            src="./src/assets/passenger.svg"
            className="w-auto	h-96"
            alt="Passenger App"
          />
          <button
            className="bg-black hover:bg-violet-500 hover:transition-colors delay-100 text-white font-bold py-3 px-4 rounded-lg lg:w-[200px] md:w-[200px]"
            onClick={() =>
              redirectToURL(
                "https://drive.google.com/file/d/1VhsCNOTvs7Ne6zm0A7fjU91Sw7ovBmtg/view?usp=sharing"
              )
            }
          >
            <div className="text-[11px] sans">Download our</div>{" "}
            <div>Passenger App</div>
          </button>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="./src/assets/driver.svg"
            className="w-auto h-96"
            alt="Driver App"
          />
          <button
            className="bg-black hover:bg-violet-500 hover:transition-colors delay-100 text-white font-bold py-3 px-4 rounded-lg lg:w-[200px] md:w-[200px]"
            onClick={() =>
              redirectToURL(
                "https://drive.google.com/file/d/1BvT_DKan_-2HJFw_6beNWZ4gSQX-xOaD/view?usp=sharing"
              )
            }
          >
            <div className="text-[11px] sans">Download our</div>{" "}
            <div>Driver App</div>
          </button>
        </div>
      </div>
      <p className="text-center text-black font-bold py-10 m-auto">
        Please click the buttons above to download and install the respective
        <br />
        apps for passengers and drivers.
      </p>
    </div>
  );
}

export default App;
