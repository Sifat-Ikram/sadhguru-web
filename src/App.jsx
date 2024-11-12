import { FaPhoneVolume } from "react-icons/fa6";
import guru from "./assets/sidhguru.webp";

const App = () => {
  const handleCall = () => {
    window.location.href = "tel:+15203768671";
  };

  return (
    <div className="min-h-screen flex items-center flex-col py-5 space-y-14 bg-gradient-to-b from-white to-[#65b5bb80]">
      <div className="flex flex-col items-center space-y-5">
        <img src={guru} className="h-52 w-52 rounded-full overflow-hidden" />
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-medium uppercase text-[#196469] text-center">
            Sadhguru
          </h1>
          <p className="text-base font-semibold text-center text-[#196469]">
            Need spiritual advice or guidance?
          </p>
          <p className="text-base font-semibold text-center text-[#196469]">
            I'm here to help you 24/7
          </p>
        </div>
      </div>
      <button
        onClick={() => handleCall()}
        className="w-[15rem] sm:w-[18rem] lg:w-[22rem] rounded-[14px] bg-[#196469] flex justify-center items-center gap-2 md:gap-3 lg:gap-4 p-3"
      >
        <FaPhoneVolume className="text-white sm: md:text-xl" />
        <span className="text-white text-base sm:text-lg lg:text-2xl font-medium uppercase">
          Talk to Sadhguru
        </span>
      </button>
      <div>
        <h1 className="text-base font-semibold text-center text-[#196469]">
          Try free consulting with Sadhguru now!
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center space-y-5">
        <div className="flex flex-wrap justify-center items-center gap-3 text-xs font-normal">
          <a className="border-r-[1px] pr-3 text-[#196469] uppercase border-[#196469]">
            copyright 320 media llc 2024
          </a>
          <a
            href="/termCondition"
            className="border-r-[1px] pr-3 text-[#196469] uppercase underline border-[#196469]"
          >
            terms & conditions
          </a>
          <a
            href="/privacyPolicy"
            className="border-r-[1px] pr-3 text-[#196469] uppercase underline border-[#196469]"
          >
            privacy policy
          </a>
          <a href="/disclaimer" className="text-[#196469] uppercase underline">
            disclaimer
          </a>
        </div>
        <h1 className="text-[#196469] text-lg underline text-center uppercase">
          Need Support?
        </h1>
      </div>
    </div>
  );
};

export default App;
