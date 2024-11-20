import { useCallback, useEffect, useState } from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import guru from "./assets/sidhguru.webp";
import { BlandWebClient } from "bland-client-js-sdk";
import generateSessionToken from "./utils/generateSessionToken";

const App = () => {
  const [callState, setCallState] = useState("idle");
  const [sdk, setSdk] = useState(null);
  const agentId = import.meta.env.VITE_AGENT_ID;

  useEffect(() => {
    const initSdk = async () => {
      const token = await generateSessionToken();
      if (token) {
        const client = new BlandWebClient(agentId, token);
        setSdk(client);
      }
    };

    initSdk();
  }, []);

  const handleCall = useCallback(async () => {
    try {
      await sdk.initConversation({ sampleRate: 44100, echoCancellation: true });
      setCallState("inCall");
    } catch (err) {
      console.error("Error initializing conversation:", err);
      setCallState("idle");
    }
  }, [sdk]);

  const handleCancel = useCallback(async () => {
    if (sdk) {
      await sdk.stopConversation();
      setCallState("idle");
    }
  }, [sdk]);

  return (
    <div className="min-h-screen flex items-center flex-col py-5 space-y-14 bg-gradient-to-b from-white to-[#65b5bb80]">
      {/* Header Section */}
      <div className="flex flex-col items-center space-y-5">
        <img
          src={guru}
          alt="Sadhguru's profile"
          className="h-52 w-52 rounded-full overflow-hidden"
        />
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

      {/* Call Button / Status */}
      {callState === "idle" && (
        <button
          onClick={handleCall}
          className="w-[15rem] sm:w-[18rem] lg:w-[22rem] rounded-[14px] bg-[#196469] hover:bg-[#165c5e] flex justify-center items-center gap-2 md:gap-3 lg:gap-4 p-3 transition-all duration-300 ease-in-out"
        >
          <FaPhoneVolume className="text-white md:text-xl" />
          <span className="text-white text-base sm:text-lg lg:text-2xl font-medium uppercase">
            Talk to Sadhguru
          </span>
        </button>
      )}

      {callState === "inCall" && (
        <div className="flex flex-col justify-center items-center space-y-5">
          <button
            aria-label="Cancel call"
            onClick={handleCancel}
            className="p-3 rounded-full bg-red-500 hover:bg-red-600 transition-all duration-300 ease-in-out"
          >
            <IoCallSharp className="text-white text-3xl" />
          </button>
        </div>
      )}

      {/* Footer Section */}
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
