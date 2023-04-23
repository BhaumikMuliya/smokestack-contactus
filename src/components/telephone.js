import React from "react";
import "./../styles/animation.css";
import { isMobile } from "../utils/checkDevice";

function Telephone() {
  const [isCalling, setIsCalling] = React.useState(false);
  const [showHint, setShowHint] = React.useState(false);

  const keyDownHandler = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      setIsCalling(true);
    } else if (event.key === "Escape") {
      event.preventDefault();
      setIsCalling(false);
      setShowHint(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  return (
    <section className="relative w-screen h-screen overflow-hidden">
      <img
        src={
          isMobile()
            ? "https://24108406.fs1.hubspotusercontent-na1.net/hubfs/24108406/%5Bi-SmokeStack%5D/Website/Files%20for%20Developer/Contact%20us%20Page/Mobile/Backgound%20by%20%5Bi-smokestack%5D.jpg"
            : "https://24108406.fs1.hubspotusercontent-na1.net/hubfs/24108406/%5Bi-SmokeStack%5D/Website/Files%20for%20Developer/Contact%20us%20Page/Web/Elements/Contact%20Us%20by%20%5Bi-smokestack%5D.png"
        }
        alt="background"
        className={`fixed z-0 object-cover h-full m-auto -translate-x-1/2 left-1/2 ${
          isMobile() ? "w-full" : ""
        }`}
      />
      {isMobile() ? (
        <img
          src="https://24108406.fs1.hubspotusercontent-na1.net/hubfs/24108406/%5Bi-SmokeStack%5D/Website/Files%20for%20Developer/Contact%20us%20Page/Mobile/table%20%20by%20%5Bi-smokestack%5D.png"
          alt="table"
          className={`fixed bottom-0 z-0 object-cover h-48 m-auto -translate-x-1/2 left-1/2 ${
            isMobile() ? "w-full" : ""
          }`}
        />
      ) : null}
      {showHint ? (
        <img
          src={
            isMobile()
              ? "https://24108406.fs1.hubspotusercontent-na1.net/hubfs/24108406/%5Bi-SmokeStack%5D/Website/Files%20for%20Developer/Contact%20us%20Page/Mobile/Disclaimer%20by%20%5Bi-smokestack%5D.png"
              : "https://24108406.fs1.hubspotusercontent-na1.net/hubfs/24108406/%5Bi-SmokeStack%5D/Website/Files%20for%20Developer/Contact%20us%20Page/Web/Elements/Spotlight%20by%20%5Bi-smokestack%5D.png"
          }
          alt="hint"
          className={`fixed z-10 object-cover h-full m-auto -translate-x-1/2 left-1/2 ${
            isMobile() ? "w-full" : ""
          }`}
        />
      ) : null}
      <img
        src="https://24108406.fs1.hubspotusercontent-na1.net/hubfs/24108406/%5Bi-SmokeStack%5D/Website/Files%20for%20Developer/Contact%20us%20Page/Web/Elements/Telephone%20Bottom%20by%20%5Bi-smokestack%5D.png"
        alt="telephone"
        className={`absolute z-20 -translate-x-1/2 bottom-12 left-1/2 ${
          isMobile() ? "w-40" : "w-72"
        }`}
        onClick={() => setIsCalling(true)}
      />
      <img
        src="https://24108406.fs1.hubspotusercontent-na1.net/hubfs/24108406/Files%20for%20Developer/Contact%20us%20Page/Web/Ringing%20Slide/2.%20Reciever%20by%20%5Bi-smokestack%5D.png"
        alt="receiver"
        className={`absolute left-1/2 z-10 ${
          isCalling ? "vibrate_receiver" : ""
        } ${
          isMobile() ? "bottom-24 -ml-138px w-64" : "bottom-36 -ml-58 w-108"
        }`}
      />
      <img
        src="https://24108406.fs1.hubspotusercontent-na1.net/hubfs/24108406/%5Bi-SmokeStack%5D/Website/Files%20for%20Developer/Contact%20us%20Page/Web/Elements/Disclaimer%20by%20%5Bi-smokestack%5D.png"
        alt="icon"
        className={`absolute left-1/2 z-20 ${
          isCalling ? "disclaimer" : "hidden"
        } ${isMobile() ? "w-8 ml-24 top-26rem" : "w-12 ml-56 top-106"}`}
        onClick={() => setShowHint(true)}
      />
      <div
        className={`absolute z-0 text-center -translate-x-1/2 left-1/2 font-yfs  ${
          isMobile() ? "bottom-80 flex flex-col gap-3" : "bottom-106"
        } ${isMobile() && showHint ? "hidden" : ""}`}
      >
        <p
          className={`pl-10 rotate-6 ${isCalling ? "xl_text" : "hidden"} ${
            isMobile() ? "text-40" : "text-60"
          }`}
        >
          Tring..
        </p>
        <p
          className={`pr-5 -rotate-3 ${isCalling ? "lg_text" : "hidden"} ${
            isMobile() ? "text-30" : "text-50"
          }`}
        >
          Tring..
        </p>
        <p
          className={`pl-10 ${isCalling ? "md_text" : "hidden"} ${
            isMobile() ? "text-2xl" : "text-40"
          }`}
        >
          Tring..
        </p>
        <p
          className={`pr-5 -rotate-3 ${isCalling ? "sm_text" : "hidden"} ${
            isMobile() ? "text-xl" : "text-30"
          }`}
        >
          Tring..
        </p>
      </div>
    </section>
  );
}

export default Telephone;
