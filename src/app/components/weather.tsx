
export default function Weather() {

  return (
  <>
        <div className="flex justify-center items-center h-screen m-0 font-poppins bg-gray-900 text-[120%] bg-cover bg-center bg-no-repeat"  style={{ backgroundImage: "url('./assets/oxa-roxa-tOqoBPr12C8-unsplash.jpg')" }}>
        <div className="w-[70%] max-w-[1280px] h-[80%] max-h-[720px] text-white bg-cover bg-center bg-no-repeat flex"  style={{ backgroundImage: "url('./assets/tom-barrett-hgGplX3PFBg-unsplash.png')" }}>
            <div className="w-[60%] pl-[60px] pt-[15px] pb-[15px] m-[20px]">
            <h2 className="font-light text-lg">Weather Forecast</h2>
            <div className="mt-[270px] flex text-2xl h-[70px] py-[10px]">
                <h2 id="cityOutput"></h2>
                <h2 id="country" className="pl-2"></h2>
            </div>
            <div className="flex font-light">
                <h4 id="lat"></h4>
                <h4 id="longi" className="pl-2"></h4>
            </div>
            <div className="flex">
                <div className="w-[25%] pt-[5px]">
                <h1 className="text-[80px] m-0" id="temp"></h1>
                </div>
                <div className="ml-[15px] w-[60%]">
                <img id="descLogo" className="h-[55px] w-[55px] pt-[15px] m-0" />
                <h2 className="text-lg font-light m-0 p-0" id="description"></h2>
                </div>
            </div>
            </div>
            <div className="w-[40%] flex flex-col p-[40px_45px_0_45px] backdrop-blur-[10px]">
            <div className="flex pt-[3px]">
                <input id="searchInput" className="bg-transparent w-[70%] h-[35px] border-none border-b-[1px] border-white/40 text-white text-[16px] p-[0_20px]" autocomplete="off" name="searchInput" type="text" placeholder="Location" />
                <button className="bg-transparent h-[40px] w-[40px] border-2 border-white/40 rounded-[3px]">
                <svg className="text-white/60" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z">
                    </path>
                </svg>
                </button>
            </div>
            <div className="flex flex-col text-white/60 text-[16px] mt-auto pt-[230px]">
                <div className="flex justify-between py-[18px]">
                <span className="humidityHeading">Humidity</span>
                <span id="humidity"></span>
                </div>
                <div className="flex justify-between py-[18px]">
                <span className="windHeading">Wind Speed</span>
                <span id="wind"></span>
                </div>
                <div className="flex justify-between py-[18px]">
                <span className="pressureHeading">Pressure</span>
                <span id="pressure"></span>
                </div>
            </div>
            </div>
        </div>
        </div>
  </>
  );
}
